import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GetJobStatusService {

  constructor(private httpClient: HttpClient) { }

  public getJobStatusData(): Observable<{}> {
    const postData = {
      allLocSetting: "true",
      lang: "en",
      locDateTime: null,
      locNbrList: [],
      runPlanNbrList: [],
      userType: "00000000"
    };
    return this.httpClient
      .post(`http://localhost:8088/retrieveJobStatus`, postData);
  }
}
