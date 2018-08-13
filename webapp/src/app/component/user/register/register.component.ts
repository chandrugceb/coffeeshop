import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { User } from '../../../user';
import { Registeruser } from '../../../registeruser';
import { UserService } from '../../../shared_service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private user:Registeruser;
  isRegisterError:boolean = false;
  isRegisterSuccess:boolean = false;
  RegisterMessage:string="";
  constructor(private _userService:UserService) { 
  }

  ngOnInit() {
    this.resetForm();
  }
  OnRegister(){
    if(this.user.userPassword==this.user.userConfirmPassword){
      this.isRegisterError=false;
      this._userService.registerUser(this.user).subscribe((res)=>{
        this.isRegisterSuccess=true;
        this.RegisterMessage="User registration Successfull";
        console.log(res);
        setTimeout(() => {
          this.isRegisterSuccess = false;
          this.RegisterMessage="";
        }, 5000);
      },(err)=>{
        this.isRegisterError = true;
        this.RegisterMessage = err;
      });

    }
    else
    {
      this.isRegisterError = true;
      this.RegisterMessage = "Please enter same password in password and confirm password field"

    }

  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      userName: '',
      userPassword: '',
      userConfirmPassword: '',
      DOB: ''
    }
  }

}
