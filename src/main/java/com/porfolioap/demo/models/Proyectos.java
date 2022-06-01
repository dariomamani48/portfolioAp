package com.porfolioap.demo.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Proyectos {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idProyectos;
    private String tituloPro;
    private int fechaPro;
    private String linkToPro;
    private String descPro;
    private String imagenPro;

    public Proyectos() {
    }

    public Proyectos(Long idProyectos, String tituloPro, int fechaPro, String linkToPro, String descPro, String imagenPro) {
        this.idProyectos = idProyectos;
        this.tituloPro = tituloPro;
        this.fechaPro = fechaPro;
        this.linkToPro = linkToPro;
        this.descPro = descPro;
        this.imagenPro = imagenPro;
    }

    public Long getIdProyectos() {
        return idProyectos;
    }

    public void setIdProyectos(Long idProyectos) {
        this.idProyectos = idProyectos;
    }

    public String getTituloPro() {
        return tituloPro;
    }

    public void setTituloPro(String tituloPro) {
        this.tituloPro = tituloPro;
    }

    public int getFechaPro() {
        return fechaPro;
    }

    public void setFechaPro(int fechaPro) {
        this.fechaPro = fechaPro;
    }

    public String getLinkToPro() {
        return linkToPro;
    }

    public void setLinkToPro(String linkToPro) {
        this.linkToPro = linkToPro;
    }

    public String getDescPro() {
        return descPro;
    }

    public void setDescPro(String descPro) {
        this.descPro = descPro;
    }

    public String getImagenPro() {
        return imagenPro;
    }

    public void setImagenPro(String imagenPro) {
        this.imagenPro = imagenPro;
    }
}
