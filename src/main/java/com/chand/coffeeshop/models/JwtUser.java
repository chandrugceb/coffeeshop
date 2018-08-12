package com.chand.coffeeshop.models;

public class JwtUser extends User{
    private String userName;
    private long id;
    private String role;

    public User setUserName(String userName) {
        this.userName = userName;
        return null;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getUserName() {
        return userName;
    }

    public long getId() {
        return id;
    }

    public String getRole() {
        return role;
    }
}
