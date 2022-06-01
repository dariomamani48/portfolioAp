package com.porfolioap.demo.services;


import com.porfolioap.demo.exception.UserNotFoundException;

import com.porfolioap.demo.models.Usuario;
import com.porfolioap.demo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UsuarioService {
    private final UsuarioRepository usuarioRepo;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepo) {
        this.usuarioRepo = usuarioRepo;
    }

    public Usuario addUsuario(Usuario usuario){
        return usuarioRepo.save(usuario);
    }

    public List<Usuario> getUsuario(){
        return usuarioRepo.findAll();
    }

    public Usuario editarUsuario(Usuario usuario){
        return usuarioRepo.save(usuario);
    }


    public void borrarUsuario(Long id){
        usuarioRepo.deleteById(id);
    }
    public Usuario buscarUsuarioPorId(Long id){
        return usuarioRepo.findById(id).orElseThrow(()->new UserNotFoundException("usuario no encontrado"));
    }
}
