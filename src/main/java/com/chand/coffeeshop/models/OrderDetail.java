package com.chand.coffeeshop.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="order_detail_id")
    private int orderDetailId;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id")
    private Product product;
    private int quantity;
    private float linePrice;
    @ManyToOne
    @JoinColumn(name="order_id", nullable = false)
    @JsonIgnore
    private MyOrder myOrder;
    private String orderDetailStatus;

    public int getOrderDetailId() {
        return orderDetailId;
    }

    public OrderDetail setOrderDetailId(int orderDetailId) {
        this.orderDetailId = orderDetailId;
        return this;
    }

    public Product getProduct() {
        return product;
    }

    public OrderDetail setProduct(Product product) {
        this.product = product;
        return this;
    }

    public int getQuantity() {
        return quantity;
    }

    public OrderDetail setQuantity(int quantity) {
        this.quantity = quantity;
        return this;
    }

    public float getLinePrice() {
        linePrice = product.getUnitPrice()*quantity;
        return linePrice;
    }
    @JsonIgnore
    public MyOrder getOrder() {
        return myOrder;
    }

    public OrderDetail setOrder(MyOrder myOrder) {
        this.myOrder = myOrder;
        return this;
    }

    public String getOrderDetailStatus() {
        if(this.orderDetailStatus==null)
        {
            this.orderDetailStatus = "pending";
        }
        return this.orderDetailStatus;
    }

    public OrderDetail setOrderDetailStatus(String orderDetailStatus) {
        if(orderDetailStatus.isEmpty())
        {
            this.orderDetailStatus = "pending";
            return this;
        }
        this.orderDetailStatus = orderDetailStatus;
        return this;
    }
}
