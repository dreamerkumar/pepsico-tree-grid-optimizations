import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TreeGridService } from '../tree-grid-service';
import { JobstatusgridLayoutService } from '../jobstatusgrid-layout.service';
import { Observable } from 'rxjs';
import { GetJobStatusService } from '../get-job-status-data.service';

@Component({
  selector: 'app-job-status',
  templateUrl: './job-status.component.html',
  styleUrls: ['./job-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobStatusComponent implements OnInit {
  data$: Observable<any>;
  jobStatusTable;
  constructor(
    private service: GetJobStatusService,
    private tableLayoutService: JobstatusgridLayoutService,
    private treeGridService: TreeGridService
  ) { }

  ngOnInit(): void {
    this.data$ = this.service.getJobStatusData();
    this.data$.subscribe({
      next: (jobData) => {
        setTimeout(() => {
          console.log('..... creating the jobstatus table .....');
          this.jobStatusTable = this.treeGridService.create(
            'table',
            {
              data: jobData,
              layout: this.tableLayoutService._tableLayoutDataEnglish
            },
            'JobStatus'
          );
          this.jobStatusTable.SetLanguage('EN');
        }, 1000);
      }
    })
  }

}
