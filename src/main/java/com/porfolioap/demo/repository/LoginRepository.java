package com.porfolioap.demo.repository;

import com.porfolioap.demo.models.Login;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LoginRepository extends JpaRepository<Login,Integer> {
    Optional<Login> findByEmail(String email);
}
