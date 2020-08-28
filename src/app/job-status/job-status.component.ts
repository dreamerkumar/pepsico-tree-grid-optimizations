import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TreeGridService } from '../tree-grid-service';
import { JobstatusgridLayoutService } from '../jobstatusgrid-layout.service';
import { Observable } from 'rxjs';
import { GetJobStatusService } from '../get-job-status-data.service';
import jsonQ from 'jsonq';

@Component({
  selector: 'app-job-status',
  templateUrl: './job-status.component.html',
  styleUrls: ['./job-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobStatusComponent implements OnInit {
  data$: Observable<any>;
  jobStatusTable;

  languagePreference: string;
  counter: number;
  sourceCounter: number;
  destinationCounter: number;
  DRP_PLAN_PROCESS: string;
  DRP_PLAN_PROCESS_BATCH: string;
  DRP_SUCCESS: string;
  DRP_FAILURE: string;
  DRP_INPROGRESS: string;
  DRP_COMPLETE: string;

  // CONSTANTS
  DRP_PLAN_PROCESS_EN = 'DRP Plan Process and Alerts 9000-9099 Refresh';
  DRP_PLAN_PROCESS_FR = 'Màj traitement plan DRP et alertes 9000-9099';
  DRP_PLAN_PROCESS_BATCH_EN = 'DRP Plan Process Batch Job';
  DRP_PLAN_PROCESS_BATCH_FR = 'Traitement par lot traitement plan DRP';
  DRP_SUCCESS_EN = 'Success';
  DRP_FAILURE_EN = 'Failure';
  DRP_INPROGRESS_EN = 'In Progress';
  DRP_SUCCESS_FR = 'Réussi';
  DRP_FAILURE_FR = 'Échec';
  DRP_INPROGRESS_FR = 'En cours';
  DRP_COMPLETE_EN = 'Complete';
  DRP_COMPLETE_FR = 'Terminer';
  timestamp: () => void;



  constructor(
    private service: GetJobStatusService,
    private tableLayoutService: JobstatusgridLayoutService,
    private treeGridService: TreeGridService
  ) { 
    this.DRP_PLAN_PROCESS = this.DRP_PLAN_PROCESS_EN;
    this.DRP_PLAN_PROCESS_BATCH = this.DRP_PLAN_PROCESS_BATCH_EN;
    this.DRP_SUCCESS = this.DRP_SUCCESS_EN;
    this.DRP_FAILURE = this.DRP_FAILURE_EN;
    this.DRP_INPROGRESS = this.DRP_INPROGRESS_EN;
    this.DRP_COMPLETE = this.DRP_COMPLETE_EN;
  }

  ngOnInit(): void {
    this.data$ = this.service.getJobStatusData();
    this.data$.subscribe({
      next: (jobData) => {
        setTimeout(() => {
          console.log('..... creating the jobstatus table .....');
          this.jobStatusTable = this.treeGridService.create(
            'table',
            {
              data: this.handleResponse(jobData),
              layout: this.tableLayoutService._tableLayoutDataEnglish
            },
            'JobStatus'
          );
          this.jobStatusTable.SetLanguage('EN');
        }, 1000);
      }
    })
  }

  handleResponse(jobsArray): any {
    // this.jobStatusService.setMaxLocForRunPlan(
    //   jobsArray['localRunPlanThreshold']
    // );

    console.log('START MODIFICATION');
    for (const locationLevel of jobsArray['localJobStatusDataSet']) {
      const location = locationLevel.localLocLevel;
      this.counter = 0;
      this.sourceCounter = 0;
      this.destinationCounter = 0;

      // Job Level
      this.modifyLocJobLevel(location);

      // Source Level
      if (location.localSrceLocLevelTracker) {
        this.modifySourceLevel(location);
      }

      // Destination Level
      if (location.localDestLocLevelTracker) {
        this.modifyDestinationLevel(location);
      }

      // Setting Def at Location level
      if (location['localLocNbr'] !== 999999) {
        location['Def'] = 'RegionDivision';
      } else {
        location['Def'] = 'AllLocationLevelWithoutFilter';
      }
    }

    // replacing "jobLevel" with "Items"
    const dataConversion = JSON.stringify(jobsArray).replace(
      /localJobLevel/g,
      'Items'
    );
    jobsArray = JSON.parse(dataConversion);

    const resultObject = jsonQ(jobsArray);

    const newJobsData = resultObject.find('localLocLevel');

    console.log('END MODIFICATION');

    return { Items: newJobsData.value() };
  }

  modifyLocJobLevel(location) {
    let startDt, endDt, durationTm, userid, lastSuccDt;
    let consolidatedStatus;
    let errorFlag = false;
    let inProgressFlag = false;

    // Filter Parameter
    const jobsAtLoction = [];
    let failureFlag = 0;
    let successFlag = 0;
    let progressFlag = 0;

    // Jobs at Location level
    for (const locJobs of location['localJobLevel']) {

      // Filter Parameter
      locJobs['Def'] = 'ChildLevel';
      locJobs['id'] = location['localLocNbr'].toString().concat(this.counter.toString());
      this.counter++;
      locJobs['localLocCtryCode'] = location.localLocCtryCode;
      locJobs['localLocTypeCode'] = location.localLocTypeCode;
      locJobs['localBusUnit'] = location.localBusUnit;
      locJobs['localRegion'] = location.localRegion;
      locJobs['localStatus'] = Number(locJobs['localStatus']);

      // Consolidating Start & End (Date and Time) & user details for location level
      if (
        locJobs['localDataLevel'] === this.DRP_PLAN_PROCESS
      ) {
        startDt = locJobs['localStartDt'];
        endDt = locJobs['localEndDt'];
        durationTm = locJobs['localDurationTm'];
        userid = locJobs['localUserid'];
        lastSuccDt = locJobs['localLastSuccDt'];
      } else if (
        locJobs['localDataLevel'] === this.DRP_PLAN_PROCESS_BATCH
      ) {
        startDt = locJobs['localStartDt'];
        endDt = locJobs['localEndDt'];
        durationTm = locJobs['localDurationTm'];
        userid = locJobs['localUserid'];
        lastSuccDt = locJobs['localLastSuccDt'];
      }

      // Conversion of status at Job Level
      if (locJobs['localStatus'] === 0) {
        locJobs['localStatus'] = this.DRP_SUCCESS;
      } else if (locJobs['localStatus'] === 1) {
        locJobs['localStatus'] = this.DRP_FAILURE;
        errorFlag = true;
      } else {
        locJobs['localStatus'] = this.DRP_INPROGRESS;
        inProgressFlag = true;
      }

      locJobs['Def'] = 'DataLevelStatus';
      locJobs['CanSelect'] = 0;
      if (location['localLocNbr'] === 999999) {
        locJobs['Def'] = 'DataLevelStatusAllLocation';
        if (locJobs['localStatus'] === this.DRP_SUCCESS) {
          successFlag = 1;
        } else if (locJobs['localStatus'] === this.DRP_FAILURE) {
          failureFlag = 1;
        } else if (locJobs['localStatus'] === this.DRP_INPROGRESS) {
          progressFlag = 1;
        }
      }
      locJobs['jobsAtLoction'] = locJobs['localDataLevel'];
      jobsAtLoction.push(locJobs['localDataLevel']);
      locJobs['locationStatus'] = location['locationStatus'];
      locJobs['jobLevelStatus'] = locJobs['localStatus'];
    }

    // Conversion of status at Location level
    if (inProgressFlag) {
      consolidatedStatus = this.DRP_INPROGRESS;
    } else if (errorFlag) {
      consolidatedStatus = this.DRP_FAILURE;
    } else {
      consolidatedStatus = this.DRP_COMPLETE;
    }
    location['localStatus'] = consolidatedStatus;
    location['localStartDt'] = startDt;
    location['localEndDt'] = endDt;
    location['localDurationTm'] = durationTm;
    location['localUserid'] = userid;
    location['localLastSuccDt'] = lastSuccDt;
    location.localJobLevel['Def'] = 'ChildLevel';

    location['locationStatus'] = location['localStatus'] === this.DRP_COMPLETE ? this.DRP_SUCCESS : location['localStatus'];
    location['jobLevelStatus'] = location['locationStatus'];
    const concatValue = [];
    if (location['localLocNbr'] === 999999) {
      if (successFlag === 1) {
        const successValue = this.DRP_SUCCESS
        concatValue.push(successValue);
      }
      if (failureFlag === 1) {
        const failureValue = this.DRP_FAILURE
        concatValue.push(failureValue);
      }
      if (progressFlag === 1) {
        const inprogressValue = this.DRP_INPROGRESS
        concatValue.push(inprogressValue);
      }
      location['jobLevelStatus'] = concatValue.join(';');
    }
    location['jobsAtLoction'] = jobsAtLoction.join(';');
  }

  modifySourceLevel(location) {
    let srcStartDt, srcEndDt, srcDurationTm, srcUserid, srcLastSuccDt;
    let srcLevelErrorFlag = false;
    let srcLevelInProgressFlag = false;
    let srcLevelConsolidatedStatus;

    for (const src of location['localSrceLocLevel']) {
      src['Def'] = 'SourceLevel';

      // If Source has Jobs
      if (src.localJobLevelTracker) {
        let srcErrorFlag = false;
        let srcInProgressFlag = false;
        let srcConsolidatedStatus;
        const srcJobsAtLocation = [];

        // Jobs at Source Level
        for (const i of src.localJobLevel) {

          src['Def'] = 'SourceLevel';
          i['id'] = location['localLocNbr'].toString().concat(this.counter.toString());
          this.counter++;
          i['localLocCtryCode'] = location.localLocCtryCode;
          i['localLocTypeCode'] = location.localLocTypeCode;
          i['localBusUnit'] = location.localBusUnit;
          i['localRegion'] = location.localRegion;
          i['localStatus'] = Number(i['localStatus']);
          if (
            i['localDataLevel'] === this.DRP_PLAN_PROCESS
          ) {
            srcStartDt = i['localStartDt'];
            srcEndDt = i['localEndDt'];
            srcDurationTm = i['localDurationTm'];
            srcUserid = i['localUserid'];
            srcLastSuccDt = i['localLastSuccDt'];
          } else if (
            i['localDataLevel'] === this.DRP_PLAN_PROCESS_BATCH
          ) {
            srcStartDt = i['localStartDt'];
            srcEndDt = i['localEndDt'];
            srcDurationTm = i['localDurationTm'];
            srcUserid = i['localUserid'];
            srcLastSuccDt = i['localLastSuccDt'];
          }
          if (i['localStatus'] === 1) {
            srcErrorFlag = true;
          } else if (i['localStatus'] === 2) {
            srcInProgressFlag = true;
          }

          if (i['localStatus'] === 0) {
            i['localStatus'] = this.DRP_SUCCESS;
          } else if (i['localStatus'] === 1) {
            i['localStatus'] = this.DRP_FAILURE;
          } else {
            i['localStatus'] = this.DRP_INPROGRESS;
          }

          i['Def'] = 'DataLevelStatus';
          i['CanSelect'] = 0;
          i['jobsAtLoction'] = i['localDataLevel'];
          srcJobsAtLocation.push(i['localDataLevel']);
          i['jobLevelStatus'] = i['localStatus'];

        }
        if (srcInProgressFlag) {
          srcConsolidatedStatus = this.DRP_INPROGRESS;
          srcLevelInProgressFlag = true;
        } else if (srcErrorFlag) {
          srcConsolidatedStatus = this.DRP_FAILURE;
          srcLevelErrorFlag = true;
        } else {
          srcConsolidatedStatus = this.DRP_SUCCESS;
        }
        src['localStatus'] = srcConsolidatedStatus;
        src['localStartDt'] = srcStartDt;
        src['localEndDt'] = srcEndDt;
        src['localDurationTm'] = srcDurationTm;
        src['localUserid'] = srcUserid;
        src['localLastSuccDt'] = srcLastSuccDt;

        // this.settingFilter(src);
        src['locationStatus'] = src['localStatus'] === this.DRP_COMPLETE ? this.DRP_SUCCESS : src['localStatus'];
        src['jobLevelStatus'] = src['locationStatus'];
        src['jobsAtLoction'] = srcJobsAtLocation.join(';');

      }

      // If Source does not have Jobs
      if (!src.localJobLevelTracker) {
        src['localStatus'] = this.DRP_SUCCESS;
        src['jobLevelStatus'] = this.DRP_SUCCESS;
      }
    }
    if (srcLevelInProgressFlag) {
      srcLevelConsolidatedStatus = this.DRP_INPROGRESS;
    } else if (srcLevelErrorFlag) {
      srcLevelConsolidatedStatus = this.DRP_FAILURE;
    } else {
      srcLevelConsolidatedStatus = this.DRP_SUCCESS;
    }

    const srcObj = {
      localDataLevel: 'Sources',
      localStatus: srcLevelConsolidatedStatus,
      Def: 'SourceLevel',
      id: this.sourceCounter,
      jobsAtLoction: 'ALL',
      jobLevelStatus: srcLevelConsolidatedStatus,
      Items: location.localSrceLocLevel
    };
    this.sourceCounter++;
    const srcIndex = location.localJobLevel.length;
    location.localJobLevel[srcIndex] = srcObj;

    if (srcLevelInProgressFlag) {
      location['srcLevelStatus'] = 'Progress';
    } else if (srcLevelErrorFlag) {
      location['srcLevelStatus'] = 'Fail';
    } else {
      location['srcLevelStatus'] = 'Success';
    }
  }

  modifyDestinationLevel(location) {
    let dstLevelErrorFlag = false;
    let dstLevelInProgressFlag = false;
    let dstLevelConsolidatedStatus;
    let dstStartDt, dstEndDt, dstDurationTm, dstUserid, dstLastSuccDt;

    for (const dst of location.localDestLocLevel) {
      dst['Def'] = 'DestinationLevel';

      // If destination has job levels
      if (dst.localJobLevelTracker) {
        let dstJobErrorFlag = false;
        let dstJobInProgressFlag = false;
        let dstConsolidatedStatus;
        const dstJobsAtLocation = [];

        for (const i of dst.localJobLevel) {

          i['id'] = location['localLocNbr'].toString().concat(this.counter.toString());
          this.counter++;
          i['localLocCtryCode'] = location.localLocCtryCode;
          i['localLocTypeCode'] = location.localLocTypeCode;
          i['localBusUnit'] = location.localBusUnit;
          i['localRegion'] = location.localRegion;
          i['localStatus'] = Number(i['localStatus']);

          if (
            i['localDataLevel'] === this.DRP_PLAN_PROCESS
          ) {
            dstStartDt = i['localStartDt'];
            dstEndDt = i['localEndDt'];
            dstDurationTm = i['localDurationTm'];
            dstUserid = i['localUserid'];
            dstLastSuccDt = i['localLastSuccDt'];
          } else if (
            i['localDataLevel'] === this.DRP_PLAN_PROCESS_BATCH
          ) {
            dstStartDt = i['localStartDt'];
            dstEndDt = i['localEndDt'];
            dstDurationTm = i['localDurationTm'];
            dstUserid = i['localUserid'];
            dstLastSuccDt = i['localLastSuccDt'];
          }

          if (i['localStatus'] === 0) {
            i['localStatus'] = this.DRP_SUCCESS;
          } else if (i['localStatus'] === 1) {
            i['localStatus'] = this.DRP_FAILURE;
            dstJobErrorFlag = true;
          } else {
            i['localStatus'] = this.DRP_INPROGRESS;
            dstJobInProgressFlag = true;
          }

          i['Def'] = 'DataLevelStatus';
          i['CanSelect'] = 0;
          i['jobsAtLoction'] = i['localDataLevel'];
          dstJobsAtLocation.push(i['localDataLevel']);
          i['jobLevelStatus'] = i['localStatus'];
        }

        // Destionation Status for individual Destionation
        if (dstJobInProgressFlag) {
          dstConsolidatedStatus = this.DRP_INPROGRESS;
        } else if (dstJobErrorFlag) {
          dstConsolidatedStatus = this.DRP_FAILURE;
        } else {
          dstConsolidatedStatus = this.DRP_SUCCESS;
        }

        dst['localStatus'] = dstConsolidatedStatus;
        dst['localStartDt'] = dstStartDt;
        dst['localEndDt'] = dstEndDt;
        dst['localDurationTm'] = dstDurationTm;
        dst['localUserid'] = dstUserid;
        dst['localLastSuccDt'] = dstLastSuccDt;

        // Consolidated Destination Status - Destination(Check)
        if (dst['localStatus'] === this.DRP_FAILURE) {
          dstLevelErrorFlag = true;
        } else if (dst['localStatus'] === this.DRP_INPROGRESS) {
          dstLevelInProgressFlag = true;
        }

        // this.settingFilter(dst);
        dst['locationStatus'] = dst['localStatus'] === this.DRP_COMPLETE ? this.DRP_SUCCESS : dst['localStatus'];
        dst['jobLevelStatus'] = dst['locationStatus'];
        dst['jobsAtLoction'] = dstJobsAtLocation.join(';');
      }

      // If destination doesnot have job levels
      if (!dst.localJobLevelTracker) {
        dst['localStatus'] = this.DRP_SUCCESS;
        dst['jobLevelStatus'] = this.DRP_SUCCESS;
      }
    }

    // Consolidated Destination Status - Destination
    if (dstLevelInProgressFlag) {
      dstLevelConsolidatedStatus = this.DRP_INPROGRESS;
    } else if (dstLevelErrorFlag) {
      dstLevelConsolidatedStatus = this.DRP_FAILURE;
    } else {
      dstLevelConsolidatedStatus = this.DRP_SUCCESS;
    }

    const srcObj = {
      localDataLevel: 'Destinations',
      localStatus: dstLevelConsolidatedStatus,
      Def: 'DestinationLevel',
      id: this.destinationCounter,
      jobsAtLoction: 'ALL',
      jobLevelStatus: dstLevelConsolidatedStatus,
      Items: location.localDestLocLevel
    };
    this.destinationCounter++;
    const destIndex = location.localJobLevel.length;
    location.localJobLevel[destIndex] = srcObj;

    if (dstLevelInProgressFlag) {
      location['dstLevelStatus'] = 'Progress';
    } else if (dstLevelErrorFlag) {
      location['dstLevelStatus'] = 'Fail';
    } else {
      location['dstLevelStatus'] = 'Success';
    }
  }

}
