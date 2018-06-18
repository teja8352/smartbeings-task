import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { CONFIGURL } from './config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  public url = CONFIGURL;
  public headers;
  options;
  constructor(private _http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getAllUsers() {
    return this._http.get(`${this.url}users`);
  }

  insertUser(formValue) {
    return this._http.post(`${this.url}user`, formValue, this.options);
  }

  updateUser(formValue, idToUpdate) {
    return this._http.put(`${this.url}user/${idToUpdate}`, formValue, this.options);
  }

  deleteUser(idToRemove: string) {
    return this._http.delete(`${this.url}user/${idToRemove}`);
  }
}
