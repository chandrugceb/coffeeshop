import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product';
import { ProductService } from '../../../shared_service/product.service';
import { UserService } from '../../../shared_service/user.service';
import { Order } from '../../../order';
import { Orderdetail } from '../../../orderdetail';
import { Neworderdetail } from '../../../neworderdetail';

@Component({
  selector: 'app-addeditorder',
  templateUrl: './addeditorder.component.html',
  styleUrls: ['./addeditorder.component.css']
})
export class AddeditorderComponent implements OnInit {
  private products:any;
  isOrderAdded:boolean=false;
  isOrderDetailAdded:boolean=false;
  private selectedProduct:Product;
  private orderId:Number;
  order:any;
  private customer:String;
  private quantity:Number;
  private neworderdetail:Neworderdetail;  
  private orderdetaillist:any[]=[];
  constructor(private _productService:ProductService, private _userService:UserService) { }

  ngOnInit() {
    //this.selectedProduct = {"productId":null,"productName":null,"unitPrice":null};
    this._productService.getProducts().subscribe((res)=>{
      this.products=res;
      console.log(this.products);
      if(this.products.size>0){
        //this.selectedProduct=this.products[0];
      }
    });
  }
  addOrder(){
    console.log(this.selectedProduct);
    if(this.order==null)
    {
      this._userService.addOrder(this.customer).subscribe((res)=>{
        this.order = res;
        this.isOrderAdded=true;
        console.log("RP1");
        console.log(this.order);
        this.addOrderDetail();
      },(err)=>{});
    }
    else
    {
      this.addOrderDetail();
    }
  }
  addOrderDetail(){
    this.neworderdetail = {
      quantity:this.quantity,
      product:this.selectedProduct
    }
    this._userService.addOrderDetail(this.order.orderId,this.neworderdetail).subscribe((res)=>{
      //this.order = res;
      this.orderdetaillist.push(res);
      this.isOrderDetailAdded=true;      
      console.log("RP2");
      console.log(this.order);
    },(err)=>{})
  }

}
