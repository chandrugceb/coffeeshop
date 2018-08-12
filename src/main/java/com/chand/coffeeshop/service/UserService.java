package com.chand.coffeeshop.service;

import com.chand.coffeeshop.models.MyRole;
import com.chand.coffeeshop.models.User;
import com.chand.coffeeshop.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    JwtService jwtService;
    @Autowired
    UsersRepository usersRepository;
    public String login(User user) {
        Optional<User> matchingUser = usersRepository.findByUserName(user.getUserName());
        matchingUser.orElseThrow(() ->new UsernameNotFoundException("User not found"));
        if(matchingUser.get().getUserPassword().equals(user.getUserPassword()))
        {
            return jwtService.generate(matchingUser.get());
        }
        else
        {
            return null;
        }
    }

    public Set<MyRole> getUserRoles(Integer userId) {
        Optional<User> matchingUser = usersRepository.findById(userId);
        matchingUser.orElseThrow(() ->new UsernameNotFoundException("User not found"));
        return matchingUser.get().getMyRoles();
    }

    public User getUser(int userId) {
        Optional<User> matchingUser = usersRepository.findById(userId);
        matchingUser.orElseThrow(() ->new UsernameNotFoundException("User not found"));
        return matchingUser.get();
    }
}
