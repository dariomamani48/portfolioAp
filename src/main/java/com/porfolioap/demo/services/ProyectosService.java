package com.porfolioap.demo.services;


import com.porfolioap.demo.models.Proyectos;
import com.porfolioap.demo.repository.PoryectosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProyectosService {
    private final PoryectosRepository proyectosRepo;

    @Autowired
    public ProyectosService(PoryectosRepository proyectosRepo) {
        this.proyectosRepo = proyectosRepo;
    }


    public Proyectos addProyecto(Proyectos proyecto){
        return proyectosRepo.save(proyecto);
    }

    public List<Proyectos> verProyectos(){

        return proyectosRepo.findAll();
    }

    public Proyectos editarProyecto(Proyectos proyecto){
        return proyectosRepo.save(proyecto);
    }

    public void eliminarProyecto(Long id){
        proyectosRepo.deleteById(id);
    }
}
