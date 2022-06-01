package com.porfolioap.demo;

import com.porfolioap.demo.models.Login;
import com.porfolioap.demo.repository.LoginRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.annotation.Rollback;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class UserRepositoryTest {
    @Autowired
    LoginRepository loginRepo;

    @Test
    public void testCreateUser(){
        PasswordEncoder passwordEncoder= new BCryptPasswordEncoder();
        String rawPassword="123456";
        String econdePassword=passwordEncoder.encode(rawPassword);
        Login newUser= new Login("dariomamani48@gmail.com",econdePassword);
        Login savedUser=loginRepo.save(newUser);
        assertThat(savedUser).isNotNull();
        assertThat(savedUser.getId()).isGreaterThan(0);
    }
}
