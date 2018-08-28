import { Injectable } from '@angular/core';
import{HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';

import {User} from '../user';
import { Registeruser } from '../registeruser';
import { Order } from '../order';
import { Neworderdetail } from '../neworderdetail';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string;
  private noAuthheaders = new HttpHeaders({'Content-Type':'application/json','No-Auth':'true'});  
  private authheaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private _http:HttpClient) {
    this.baseUrl='http://'+window.location.hostname+':8080';
    console.log("user service : " + this.baseUrl);
   }

  getUsers(){
    return this._http.get(this.baseUrl+'/api/secured/users',{headers:this.noAuthheaders});
  }

  getCurrentUser(){
    return this._http.get(this.baseUrl+'/api/secured/currentuser',{headers:this.authheaders});
  }

  getOrders(){
    return this._http.get(this.baseUrl+'/api/secured/myorders',{headers:this.authheaders});
  }

  registerUser(user:Registeruser){
    return this._http.post(this.baseUrl+'/api/signup',JSON.stringify(user),{headers:this.noAuthheaders});
  }

  addOrder(customerName:String){
    const newOrder = "{\"customerName\":\""+customerName+"\",\"orderTimeStamp\":\""+this.formatDate(new Date()) +"\"}";
    return this._http.post(this.baseUrl+'/api/secured/order',newOrder,{headers:this.authheaders});
  }

  addOrderDetail(orderId:Number,newOrderDetail:Neworderdetail){
    console.log("add order detail");
    return this._http.post(this.baseUrl+'/api/secured/order/'+orderId+'/orderdetails',JSON.stringify(newOrderDetail),{headers:this.authheaders});
  }
  

  login(un:string, ps:string){
    const data = "{\"userName\":\""+un+"\",\"userPassword\":\""+ps+"\"}";
    return this._http.post(this.baseUrl+'/api/login', data, {headers:this.noAuthheaders});
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}


}
