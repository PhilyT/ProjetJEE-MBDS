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
  getLibraries() {
    const url = 'http://localhost:8081/tpwsrest/libraries';
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.get(url,options).map((response: Response) => response.json());
  }
  putLibrairy(formdata: any) {
    const url = 'http://localhost:8081/tpwsrest/library?name=' + formdata.name + '&address=' + formdata.address + '&yearCreated=' + formdata.yearCreated + '&id=' + formdata.id;
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.put(url, {}, options).map((response: Response) => response.json());
  }
  addLibrary(formData: any) {
    const url = 'http://localhost:8081/tpwsrest/library?name=' + formData.name + '&address=' + formData.address + '&yearCreated=' + formData.yearCreated;
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(url, formData, options).map((response: Response) => response.json());
  }
  deleteLibrary(id) {
    const url = 'http://localhost:8081/tpwsrest/library?id=' + id;
    return this.http.delete(url).map((response: Response) => response.json());
  }
}
