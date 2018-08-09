import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private requestOptions = new RequestOptions({headers:this.headers});

  constructor(private _http:Http) { }

  getUsers(){
    return this._http.get(this.baseUrl+'/users',this.requestOptions);
  }

  registerUser(user:User){
    return this._http.post(this.baseUrl+'/users',JSON.stringify(user),this.requestOptions)
              .subscribe((res:Response)=>res.json());
  }


}
