package com.porfolioap.demo.security;

import com.porfolioap.demo.models.Login;
import com.porfolioap.demo.security.jwt.JwtTokenUtil;
import org.springframework.aop.BeforeAdvice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class AuthApi {

    @Autowired
    AuthenticationManager authManager;
    @Autowired
    JwtTokenUtil jwtTokenUtil;

    @PostMapping("/api/login")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?>login(@RequestBody @Valid AuthRequest request){
        try {
            Authentication authentication = authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),request.getPassword()
                    )
            );
            Login user=(Login) authentication.getPrincipal();
            String accessToken= jwtTokenUtil.generateAccessToken(user);
            AuthResponse response = new AuthResponse(user.getEmail(),accessToken);

            return ResponseEntity.ok().body(response);
        }catch (BadCredentialsException ex){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

}
