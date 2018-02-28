import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LibrairiesService {

  constructor(private http: Http) {

  }
  getLibrairy(librairyId) {
    const url = 'http://localhost:8081/tpwsrest/library?id=' + librairyId;
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.get(url,options).map((response: Response) => response.json());
  }

}
