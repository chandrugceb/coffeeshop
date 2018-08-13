import { Component, OnInit } from '@angular/core';

import {UserService} from '../../../shared_service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user:any={};
  isLoginError: boolean=false;
  LoginError:string="";

  constructor(private _userService:UserService, private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('userToken')!=null){
      //When token available, try route to Home Page
      this.router.navigate(['/home']);
    }

  }

  OnSubmit(userName, password){  
    this._userService.login(userName, password).subscribe(
      (res:any)=>{
          this.isLoginError=false;
          console.log(res.token);
          localStorage.setItem('userToken',res.token);
          this.router.navigate(['/home']);    
    },
      (err:any)=>{
        this.isLoginError=true;
        this.LoginError = "Invalid Credentials";
      })  
  }
}
