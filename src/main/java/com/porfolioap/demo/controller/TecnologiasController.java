package com.porfolioap.demo.controller;


import com.porfolioap.demo.models.Tecnologias;

import com.porfolioap.demo.services.TecnologiasService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/tecnologias")
@CrossOrigin(origins = "http://localhost:4200")
public class TecnologiasController {

    private final TecnologiasService tecnologiaService;

    public TecnologiasController(TecnologiasService tecnologiaService) {
        this.tecnologiaService = tecnologiaService;

    }

    @GetMapping("/all")
    public ResponseEntity<List<Tecnologias>> obtenerTenlogia(){
        List<Tecnologias> tecnologias= tecnologiaService.getTecnologias();
        return new ResponseEntity<>(tecnologias,HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<Tecnologias> editarTecnologia(@RequestBody Tecnologias tecnologia){
        Tecnologias updateTecnologia= tecnologiaService.editTecnologias(tecnologia);
        return new ResponseEntity<>(updateTecnologia,HttpStatus.OK);
    }
    @PostMapping("/addtecnologia")
    public ResponseEntity<Tecnologias> agregarTecnologia(@RequestBody Tecnologias tecnologia){
        Tecnologias nuevaTecnologia= tecnologiaService.addTecnologia(tecnologia);
        return new ResponseEntity<>(nuevaTecnologia,HttpStatus.CREATED);
    }
    @DeleteMapping("eliminar/{id}")
    public ResponseEntity<?>borrarTecnologia(@PathVariable("id") Long id){
        tecnologiaService.eliminarTecnologia(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
