package com.chand.coffeeshop.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name="user", catalog = "coffeeDB")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer userId;
    private String userName;
    private String userPassword;
    private Date DOB;
    @JsonIgnore
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "user_role",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name="role_id")})
    private Set<MyRole> myRoles;
    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "orderUser")
    private Set<MyOrder> userOrders;

    public User() {
    }

    public User(User user) {
        this.userId = user.getUserId();
        this.userName = user.getUserName();
        this.userPassword = user.getUserPassword();
        this.DOB = user.getDOB();
        this.myRoles = user.getMyRoles();
    }

    public Integer getUserId() {
        return userId;
    }

    public User setUserId(Integer userId) {
        this.userId = userId;
        return this;
    }

    public String getUserName() {
        return userName;
    }

    public User setUserName(String userName) {
        this.userName = userName;
        return this;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public User setUserPassword(String userPassword) {
        this.userPassword = userPassword;
        return this;
    }

    public Date getDOB() {
        return DOB;
    }

    public User setDOB(Date DOB) {
        this.DOB = DOB;
        return this;
    }

    public Set<MyRole> getMyRoles() {
        return myRoles;
    }

    public User setMyRoles(Set<MyRole> myRoles) {
        this.myRoles = myRoles;
        return this;
    }

    public Set<MyOrder> getUserOrders() {
        return userOrders;
    }

    public User setUserOrders(Set<MyOrder> userOrders) {
        this.userOrders = userOrders;
        return this;
    }
}
