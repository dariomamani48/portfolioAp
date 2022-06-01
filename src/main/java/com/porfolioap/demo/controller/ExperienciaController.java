package com.porfolioap.demo.controller;


import com.porfolioap.demo.models.Experiencia;
import com.porfolioap.demo.services.ExperienciaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/experiencia")
@CrossOrigin(origins = "http://localhost:4200")
public class ExperienciaController {

    private final ExperienciaService experienciaService;

    public ExperienciaController(ExperienciaService experienciaService) {
        this.experienciaService = experienciaService;


    }

    @GetMapping("/all")
    public ResponseEntity<List<Experiencia>> obtenerExperiencia(){
        List<Experiencia> experiencia= experienciaService.verExperiencia();
        return new ResponseEntity<>(experiencia,HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Experiencia> editarExperiencia(@RequestBody Experiencia experiencia){
        Experiencia updateExperiencia= experienciaService.editarExperiencia(experiencia);
        return new ResponseEntity<>(updateExperiencia,HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Experiencia> agregarExperiencia(@RequestBody Experiencia experiencia){
        Experiencia nuevaExperiencia=experienciaService.addExperienca(experiencia);
        return new ResponseEntity<>(nuevaExperiencia,HttpStatus.CREATED);
    }

    @DeleteMapping("eliminar/{id}")
    public ResponseEntity<?>borrarExperiencia(@PathVariable("id") Long id){
        experienciaService.eliminarExperiencia(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
