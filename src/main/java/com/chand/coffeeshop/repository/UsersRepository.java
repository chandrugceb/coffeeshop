package com.chand.coffeeshop.repository;

import com.chand.coffeeshop.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUserName(String userName);
}
