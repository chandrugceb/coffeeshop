package com.chand.coffeeshop.service;

import com.chand.coffeeshop.models.JwtUser;
import com.chand.coffeeshop.models.MyRole;
import com.chand.coffeeshop.models.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class JwtService {

    @Autowired
    UserService userService;


    private String secret = "youtube";

    public String generate(User user) {


        Claims claims = Jwts.claims()
                .setSubject(user.getUserName());
        claims.put("userId", String.valueOf(user.getUserId()));

        return Jwts.builder()
                .setClaims(claims)
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    public User validate(String token) {
        try {
            Claims body = Jwts.parser()
                    .setSigningKey(secret)
                    .parseClaimsJws(token)
                    .getBody();

            return userService.getUser(Integer.parseInt((String) body.get("userId")));
        }
        catch (Exception e) {
            System.out.println(e);
        }

        return null;
    }
}
