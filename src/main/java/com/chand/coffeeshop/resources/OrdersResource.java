package com.chand.coffeeshop.resources;

import com.chand.coffeeshop.models.MyOrder;
import com.chand.coffeeshop.models.OrderDetail;
import com.chand.coffeeshop.models.User;
import com.chand.coffeeshop.repository.OrderDetailRepository;
import com.chand.coffeeshop.repository.OrderRepository;
import com.chand.coffeeshop.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200,http://localhost:80",allowedHeaders = "*")
public class OrdersResource {

    @Autowired
    UsersResource usersResource;

    @Autowired
    OrderDetailRepository orderDetailRepository;


    @PostMapping("/secured/order/{order_id}/orderdetails")
    public OrderDetail addOrderDetail(HttpServletRequest httpServletRequest,
                                  HttpServletResponse httpServletResponse,
                            @PathVariable("order_id") String orderId,
                            @RequestBody OrderDetail newOrderDetail){
        User currentUser = usersResource.getUser(httpServletRequest);
        Set<MyOrder> currentUserOrders = currentUser.getUserOrders();
        for(MyOrder eachOrder:currentUserOrders){
            if(eachOrder.getOrderId() == Integer.parseInt(orderId))
            {
                httpServletResponse.setStatus(HttpServletResponse.SC_OK);
                return this.orderDetailRepository.save(newOrderDetail.setOrder(eachOrder));
            }
        }

        httpServletResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        return null;
    }

    @PutMapping("/secured/order/{order_id}/orderdetails")
    public OrderDetail modifyOrderDetail(HttpServletRequest httpServletRequest,
                                      HttpServletResponse httpServletResponse,
                                      @PathVariable("order_id") String orderId,
                                      @RequestBody OrderDetail newOrderDetail){
        User currentUser = usersResource.getUser(httpServletRequest);
        Set<MyOrder> currentUserOrders = currentUser.getUserOrders();
        for(MyOrder eachOrder:currentUserOrders){
            if(eachOrder.getOrderId() == Integer.parseInt(orderId))
            {
                httpServletResponse.setStatus(HttpServletResponse.SC_OK);
                return this.orderDetailRepository.save(newOrderDetail.setOrder(eachOrder));
            }
        }

        httpServletResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        return null;
    }
}
