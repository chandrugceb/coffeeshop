package com.chand.coffeeshop.repository;

import com.chand.coffeeshop.models.MyRole;
import com.chand.coffeeshop.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RolesRepository extends JpaRepository<MyRole, Integer> {
    Optional<MyRole> findByMyRole(String myRole);
}
