import { Component, OnInit } from '@angular/core';

import {UserService} from '../../shared_service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user:any={};

  constructor(private _userService:UserService) { }

  ngOnInit() {


  }

  onSubmit(){
    console.log(this.user);
    
  }
}
