package com.porfolioap.demo.repository;

import com.porfolioap.demo.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {
}
