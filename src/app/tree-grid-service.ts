import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TreeGridService {
  create(elementId: string, options: IOptions, treegridId?: any): any {
    const table = TreeGrid(
      {
        Debug: '',
        Data: {
          Data: this._prepareTableData(_.cloneDeep(options.data))
        },
        Layout: {
          Data: _.cloneDeep(options.layout)
        },
        Upload: {
          Format: 'JSON',
          Xml: 2,
          Type: 'body'
        }
      },
      treegridId
    );

    return table;
  }

  _prepareTableData(data: any): any {
    return {
      Body: [data]
    };
  }

}

interface IOptions {
  data: any[];
  layout: any;
}



