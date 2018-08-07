package com.chand.coffeeshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.chand.coffeeshop.repository")
@SpringBootApplication
public class CoffeeshopApplication {
    public static void main(String[] args) {
        SpringApplication.run(CoffeeshopApplication.class, args);
    }
}
