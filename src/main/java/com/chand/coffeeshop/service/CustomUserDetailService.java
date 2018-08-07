package com.chand.coffeeshop.service;

import com.chand.coffeeshop.models.CustomUserDetails;
import com.chand.coffeeshop.models.User;
import com.chand.coffeeshop.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    UsersRepository usersRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<User> OptionalUser = usersRepository.findByUserName(userName);
        OptionalUser.orElseThrow(()->new UsernameNotFoundException("User Name not Found"));
        return OptionalUser.map(CustomUserDetails::new).get();
    }
}
