import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetKeyfigureDataService {

  constructor(private httpClient: HttpClient) { }

  public getKeyFigureData(): Observable<{}> {
    const postData = {};
    return this.httpClient
      .post(``, postData);
  }

}
