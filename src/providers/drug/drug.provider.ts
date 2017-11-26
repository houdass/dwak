import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*
  Generated class for the DrugProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DrugProvider {

  constructor(public http: HttpClient) {}

  getAll() {
    return this.http
    .get(`assets/mocks/drugs.json`)
    .map((r) => r)
    .catch((error: any) => {
      console.error('An friendly error occurred', error);
      return Observable.throw(error.message || error);
    });
  }

}
