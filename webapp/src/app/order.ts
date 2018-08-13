import {Orderdetail} from './orderdetail';
export class Order {
    orderId:Number;
    customerName:string;    
    orderTotalPrice:string;
    orderTimeStamp:string;
    orderStatus:string;
    orderDetailSet:Orderdetail[];
}
