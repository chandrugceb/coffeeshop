package com.chand.coffeeshop.security;

import com.chand.coffeeshop.models.JwtAuthenticationToken;
import com.chand.coffeeshop.models.MyRole;
import com.chand.coffeeshop.models.User;
import com.chand.coffeeshop.service.JwtService;
import com.chand.coffeeshop.service.UserService;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class JwtAuthenticationTokenFilter extends AbstractAuthenticationProcessingFilter {

    @Autowired
    JwtService jwtService;

    @Autowired
    UserService userService;

    public JwtAuthenticationTokenFilter() {
        super("/api/secured/**");
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws AuthenticationException, IOException, ServletException {

        String header = httpServletRequest.getHeader("Authorization");


        if (header == null || !header.startsWith("Bearer ")) {
            throw new RuntimeException("JWT Token is missing");
        }

        String authenticationToken = header.substring(6);
        User user = jwtService.validate(authenticationToken);

        if (user == null) {
            throw new RuntimeException("JWT Token is incorrect");
        }
        List<GrantedAuthority> userAuthorities = new ArrayList<>();
        for(MyRole eachRole:user.getMyRoles()){
            userAuthorities.add(new SimpleGrantedAuthority("ROLE_"+eachRole.getRole()));
        }

        return getAuthenticationManager().authenticate(new JwtAuthenticationToken(authenticationToken, user, userAuthorities));
    }


    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        super.successfulAuthentication(request, response, chain, authResult);
        chain.doFilter(request, response);
    }

    @Override
    protected void initBeanWrapper(BeanWrapper bw) throws BeansException {
        System.out.println("Jwt Filter Init");
        super.initBeanWrapper(bw);
    }
}
