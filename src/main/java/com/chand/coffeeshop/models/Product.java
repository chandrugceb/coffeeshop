package com.chand.coffeeshop.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="product_id")
    private int productId;
    private String productName;
    private Float unitPrice;
    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<OrderDetail> orderDetailList;

    public int getProductId() {
        return productId;
    }

    public Product setProductId(int productId) {
        this.productId = productId;
        return this;
    }

    public String getProductName() {
        return productName;
    }

    public Product setProductName(String productName) {
        this.productName = productName;
        return this;
    }

    public Float getUnitPrice() {
        return unitPrice;
    }

    public Product setUnitPrice(Float unitPrice) {
        this.unitPrice = unitPrice;
        return this;
    }

    public List<OrderDetail> getOrderDetailList() {
        return orderDetailList;
    }

    public Product setOrderDetailList(List<OrderDetail> orderDetailList) {
        this.orderDetailList = orderDetailList;
        return this;
    }
}
