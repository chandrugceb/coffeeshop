package com.chand.coffeeshop.resources;

import com.chand.coffeeshop.models.Product;
import com.chand.coffeeshop.models.User;
import com.chand.coffeeshop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductResource {

    @Autowired
    ProductRepository productRepository;

    @GetMapping("/products")
    public List<Product> getProducts(){
        return productRepository.findAll();
    }

    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product){
        System.out.println(product);
        return productRepository.save(product);
    }

}