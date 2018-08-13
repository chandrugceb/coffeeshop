import { Injectable } from '@angular/core';
import{HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseUrl:string='http://localhost:8080';
  private authheaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private _http:HttpClient) { }

  getProducts(){
    return this._http.get(this.baseUrl+'/api/secured/products',{headers:this.authheaders});
  }
}
