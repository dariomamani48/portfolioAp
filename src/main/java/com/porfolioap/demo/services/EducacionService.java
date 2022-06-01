package com.porfolioap.demo.services;



import com.porfolioap.demo.models.Educacion;

import com.porfolioap.demo.repository.EducacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class EducacionService {
    private final EducacionRepository educacionRepo;

    @Autowired
    public EducacionService(EducacionRepository educacionRepo) {
        this.educacionRepo = educacionRepo;
    }

    public Educacion addEducacion(Educacion educacion){
        return educacionRepo.save(educacion);
    }

    public List<Educacion> getEducacion(){
        return  educacionRepo.findAll();

    }


    public Educacion editarEducacion(Educacion educacion){
        return educacionRepo.save(educacion);
    }



    public void borrarEducacion(Long id){
        educacionRepo.deleteById(id);
    }


}
