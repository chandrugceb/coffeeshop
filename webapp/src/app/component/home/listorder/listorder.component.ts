import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared_service/user.service';
import {Order} from '../../../order';

@Component({
  selector: 'app-listorder',
  templateUrl: './listorder.component.html',
  styleUrls: ['./listorder.component.css']
})
export class ListorderComponent implements OnInit {
  orders:any;
  pendingOrders:any;
  completedOrders:any;
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this._userService.getOrders().subscribe((res)=>{
      this.orders=res;
      console.log(this.orders);
      this.pendingOrders=this.orders.filter(order => order.orderStatus ==='pending');
      
      this.completedOrders=this.orders.filter(order => order.orderStatus ==='complete');
      
      console.log(this.pendingOrders);
    },(err)=>{});
  }

}
