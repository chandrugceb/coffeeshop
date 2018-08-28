import { Injectable } from '@angular/core';
import{HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseUrl:string;
  private authheaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private _http:HttpClient) {     
    this.baseUrl='http://'+ window.location.hostname +':8080';    
    console.log("user service : " + this.baseUrl);
   }

  getProducts(){
    return this._http.get(this.baseUrl+'/api/secured/products',{headers:this.authheaders});
  }
}
