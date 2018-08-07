package com.chand.coffeeshop.repository;

import com.chand.coffeeshop.models.MyOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<MyOrder, Integer> {
}
