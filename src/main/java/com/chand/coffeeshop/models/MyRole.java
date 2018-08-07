package com.chand.coffeeshop.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table
public class MyRole {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="role_id")
    private int roleId;
    private String myRole;
    @JsonIgnore
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "user_role",
            joinColumns = {@JoinColumn(name = "role_id")},
            inverseJoinColumns = {@JoinColumn(name="user_id")})
    private Set<User> user;

    public int getRoleId() {
        return roleId;
    }

    public MyRole setRoleId(int roleId) {
        this.roleId = roleId;
        return this;
    }

    public String getRole() {
        return myRole;
    }

    public MyRole setRole(String myRole) {
        this.myRole = myRole;
        return this;
    }

    public Set<User> getUser() {
        return user;
    }

    public MyRole setUser(Set<User> user) {
        this.user = user;
        return this;
    }
}
