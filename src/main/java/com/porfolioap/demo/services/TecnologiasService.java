package com.porfolioap.demo.services;

import com.porfolioap.demo.models.Tecnologias;
import com.porfolioap.demo.repository.TecnologiasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TecnologiasService {
    public final TecnologiasRepository tecnologiasRepo;
    @Autowired
    public TecnologiasService(TecnologiasRepository tecnologiasRepo) {
        this.tecnologiasRepo = tecnologiasRepo;
    }
    public Tecnologias addTecnologia(Tecnologias tecnologia){
        return tecnologiasRepo.save(tecnologia);

    }

    public List<Tecnologias> getTecnologias(){
        return tecnologiasRepo.findAll();

    }

    public Tecnologias editTecnologias(Tecnologias tecnologia){
        return tecnologiasRepo.save(tecnologia);
    }
    public void eliminarTecnologia(Long id){
        tecnologiasRepo.deleteById(id);
    }
}
