package com.porfolioap.demo.controller;

import com.porfolioap.demo.models.Educacion;

import com.porfolioap.demo.services.EducacionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/educaciones")
@CrossOrigin(origins = "http://localhost:4200")
public class EducacionesController {
    private final EducacionService educacionService;

    public EducacionesController(EducacionService educacionService) {
        this.educacionService = educacionService;
    }

    @GetMapping("/todos")
    public ResponseEntity<List<Educacion>> obtenerEducacion(){
        List<Educacion> educaciones= educacionService.getEducacion();
        return new ResponseEntity<>(educaciones, HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<Educacion> editarEducacion(@RequestBody Educacion educacion){
        Educacion updateEducacion= educacionService.editarEducacion(educacion);
        return new ResponseEntity<>(updateEducacion,HttpStatus.OK);
    }

    @PostMapping("/agregaredu")
    
    public ResponseEntity<Educacion> agregarEducacion(@RequestBody Educacion educacion){
        Educacion nuevaEducacion=educacionService.addEducacion(educacion);
        return new ResponseEntity<>(nuevaEducacion,HttpStatus.CREATED);
    }
    @DeleteMapping("eliminar/{id}")
    public ResponseEntity<?>borrarEducacion(@PathVariable("id") Long id){
        educacionService.borrarEducacion(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
