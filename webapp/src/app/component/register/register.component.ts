import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { User } from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private user:{};
  constructor() { 
    this.user = {};
  }

  ngOnInit() {
  }

}
