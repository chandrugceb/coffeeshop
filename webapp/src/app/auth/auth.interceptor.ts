import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private router:Router){

    }

    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        console.log("inside auth interceptor :"+ req.headers.get('No-Auth'));
        if(req.headers.get('No-Auth')=="true")
            return next.handle(req.clone());
        if(localStorage.getItem('userToken')!= null){
                const clonedreq = req.clone({
                    headers:req.headers.set("Authorization","Bearer "+ localStorage.getItem('userToken'))
                });
                
                return next.handle(clonedreq).pipe(
                            tap(
                                succ=> {},
                                err=>{
                                    //debugger;
                                    console.log("I'm Here");
                                    if(err.status==401)
                                        this.router.navigate(['/login']);
                                }
                            ));
            }
            else{
                this.router.navigate(['/login']);
            }

    }
}