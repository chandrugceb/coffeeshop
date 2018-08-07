package com.chand.coffeeshop.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table
public class MyOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="order_id")
    private int orderId;
    private String customerName;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER,mappedBy = "myOrder")
    @JsonIgnoreProperties("myOrder")
    private Set<OrderDetail> orderDetailSet;
    private float orderTotalPrice;
    private Date orderTimeStamp;
    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    @JsonIgnore
    private User orderUser;
    private String orderStatus;

    public int getOrderId() {
        return orderId;
    }

    public MyOrder setOrderId(int orderId) {
        this.orderId = orderId;
        return this;
    }

    public String getCustomerName() {
        return customerName;
    }

    public MyOrder setCustomerName(String customerName) {
        this.customerName = customerName;
        return this;
    }

    public Set<OrderDetail> getOrderDetailSet() {
        return orderDetailSet;
    }

    public MyOrder setOrderDetailSet(Set<OrderDetail> orderDetailSet) {
        this.orderDetailSet = orderDetailSet;
        return this;
    }

    public float getOrderTotalPrice() {
        float totalOrderPrice = 0;
        if(orderDetailSet!=null) {
            for (OrderDetail orderLine : orderDetailSet)
                totalOrderPrice += orderLine.getLinePrice();
        }
        this.orderTotalPrice = totalOrderPrice;
        return this.orderTotalPrice;
    }

    public MyOrder setOrderTotalPrice(float orderTotalPrice) {
        this.orderTotalPrice = orderTotalPrice;
        return this;
    }

    public Date getOrderTimeStamp() {
        return orderTimeStamp;
    }

    public MyOrder setOrderTimeStamp(Date orderTimeStamp) {
        this.orderTimeStamp = orderTimeStamp;
        return this;
    }

    public User getOrderUser() {
        return orderUser;
    }

    public MyOrder setOrderUser(User orderUser) {
        this.orderUser = orderUser;
        return this;
    }

    public String getOrderStatus() {
        boolean isAnyLineReady = false;
        boolean isAllLineCompleted = true;
        if(orderDetailSet != null){
            for(OrderDetail line:orderDetailSet)
            {
                if(line.getOrderDetailStatus().equals("ready")){
                    isAnyLineReady = true;
                }
                else if(line.getOrderDetailStatus().equals("pending"))
                {
                    isAllLineCompleted = false;
                }
            }
        }
        else
        {
            isAllLineCompleted = false;
        }
        if(isAllLineCompleted)
        {
            setOrderStatus("complete");
        }
        else if(isAnyLineReady)
        {
            setOrderStatus("ready");
        }
        else
        {
            setOrderStatus("pending");
        }

        return this.orderStatus;
    }

    public MyOrder setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
        return this;
    }
}
