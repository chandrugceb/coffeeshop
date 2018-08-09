package com.chand.coffeeshop.resources;

import com.chand.coffeeshop.models.MyOrder;
import com.chand.coffeeshop.models.User;
import com.chand.coffeeshop.repository.OrderRepository;
import com.chand.coffeeshop.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200",allowedHeaders = "*")
public class UsersResource {

    @Autowired
    UsersRepository usersRepository;
    @Autowired
    OrderRepository orderRepository;

    @GetMapping("/users")
    public List<User> getAll(){
        return usersRepository.findAll();
    }

    @PostMapping("/users")
    public User registerUser(@RequestBody User user){
        System.out.println(user);
        return usersRepository.save(user);
    }

    //@PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
    @GetMapping("/secured/all")
    public String registerUser(){
        return "secured URI";
    }

    @GetMapping("/secured/currentuser")
    public User getUser(HttpServletRequest httpServletRequest){
        Optional<User> optionalUser = usersRepository.findByUserName(httpServletRequest.getUserPrincipal().getName());
        optionalUser.orElseThrow(()->new UsernameNotFoundException("User Name not Found"));
        return (User)optionalUser.get();
    }

    @GetMapping("/secured/myorders")
    public Set<MyOrder> getMyOrders(HttpServletRequest httpServletRequest){
        User currentUser = getUser(httpServletRequest);
        return currentUser.getUserOrders();
    }

    @PostMapping("/secured/order")
    public MyOrder addOrder(HttpServletRequest httpServletRequest, @RequestBody MyOrder newOrder){
        User currentUser = getUser(httpServletRequest);
        newOrder.setOrderUser(currentUser);
        return orderRepository.save(newOrder);
    }
}
