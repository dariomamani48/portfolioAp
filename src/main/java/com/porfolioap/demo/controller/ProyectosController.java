package com.porfolioap.demo.controller;


import com.porfolioap.demo.models.Experiencia;
import com.porfolioap.demo.models.Proyectos;
import com.porfolioap.demo.services.ProyectosService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/proyectos")
@CrossOrigin(origins = "http://localhost:4200")
public class ProyectosController {

    private final ProyectosService proyectosService;

    public ProyectosController(ProyectosService proyectosService) {
        this.proyectosService = proyectosService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Proyectos>> obtenerProyectos(){
        List<Proyectos> proyecto= proyectosService.verProyectos();
        return new ResponseEntity<>(proyecto, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Proyectos> editarProyecto(@RequestBody Proyectos proyecto){
        Proyectos updateProyecto= proyectosService.editarProyecto(proyecto);
        return new ResponseEntity<>(updateProyecto,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Proyectos> agregarProyecto(@RequestBody Proyectos proyecto){
        Proyectos nuevoProyecto= proyectosService.addProyecto(proyecto);
        return new ResponseEntity<>(nuevoProyecto,HttpStatus.CREATED);
    }

    @DeleteMapping("eliminar/{id}")
    public ResponseEntity<?>borrarProyecto(@PathVariable("id") Long id){
        proyectosService.eliminarProyecto(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
