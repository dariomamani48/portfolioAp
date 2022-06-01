package com.porfolioap.demo.services;

import com.porfolioap.demo.models.Experiencia;
import com.porfolioap.demo.repository.ExperienciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
public class ExperienciaService {
    private final ExperienciaRepository experienciaRepo;

    @Autowired
    public ExperienciaService(ExperienciaRepository experienciaRepo) {
        this.experienciaRepo = experienciaRepo;
    }


    public Experiencia addExperienca(Experiencia experiencia){
        return experienciaRepo.save(experiencia);
    }

    public List<Experiencia> verExperiencia(){

        return experienciaRepo.findAll();
    }

    public Experiencia editarExperiencia(Experiencia experiencia){
        return experienciaRepo.save(experiencia);
    }

    public void eliminarExperiencia(Long id){
        experienciaRepo.deleteById(id);
    }
}
