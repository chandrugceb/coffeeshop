package com.chand.coffeeshop.resources;

import com.chand.coffeeshop.models.JwtUserDetails;
import com.chand.coffeeshop.models.MyOrder;
import com.chand.coffeeshop.models.User;
import com.chand.coffeeshop.repository.OrderRepository;
import com.chand.coffeeshop.repository.UsersRepository;
import com.chand.coffeeshop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;
import java.util.Properties;
import java.util.Set;

@RestController
@RequestMapping("/api")
//@CrossOrigin(origins="http://localhost:8080",allowedHeaders = "*")
public class UsersResource {

    @Autowired
    UsersRepository usersRepository;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    private UserService userService;

    @GetMapping("/secured/users")
    public List<User> getAll(){
        return usersRepository.findAll();
    }

    @PostMapping("/signup")
    public User registerUser(@RequestBody User user){
        System.out.println(user);
        return usersRepository.save(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user, HttpServletRequest req, HttpServletResponse res){
        System.out.println(user);
        String token = userService.login(user);
        if(token != null)
        {
            res.setStatus(HttpServletResponse.SC_CREATED);
            return token;
        }
            res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        return "Credentials Invalid";
    }

    //@PreAuthorize("hasAnyRole('ADMIN', 'STAFF')")
    @GetMapping("/secured/all")
    public String registerUser(){
        return "secured URI";
    }

    @GetMapping("/secured/currentuser")
    public User getUser(HttpServletRequest httpServletRequest){
        Optional<User> optionalUser = usersRepository.findById(((JwtUserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId().intValue());
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
