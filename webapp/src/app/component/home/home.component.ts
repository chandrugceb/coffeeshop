import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../shared_service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;

  constructor(private router:Router,private _userService:UserService) { }

  ngOnInit() {
    this._userService.getCurrentUser().subscribe((res:any)=>{
    this.setUser(res);
  },
    (err:any)=>{

    })  
  }
  Logout(){
    localStorage.removeItem('userToken');    
    this.router.navigate(['/login']);
  }

  setUser(user:User){
    this.user = user;
  }


}
