package com.porfolioap.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Experiencia {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idExp;
    private String tituloExp;
    private int fechaInicioExp;
    private int fechaFinExp;
    private String descExp;
    private String imagenExp;

    public Experiencia() {
    }

    public Experiencia(Long idExp, String tituloExp, int fechaInicioExp, int fechaFinExp, String descExp, String imagenExp) {
        this.idExp = idExp;
        this.tituloExp = tituloExp;
        this.fechaInicioExp = fechaInicioExp;
        this.fechaFinExp = fechaFinExp;
        this.descExp = descExp;
        this.imagenExp = imagenExp;
    }

    public Long getIdExp() {
        return idExp;
    }

    public void setIdExp(Long idExp) {
        this.idExp = idExp;
    }

    public String getTituloExp() {
        return tituloExp;
    }

    public void setTituloExp(String tituloExp) {
        this.tituloExp = tituloExp;
    }

    public int getFechaInicioExp() {
        return fechaInicioExp;
    }

    public void setFechaInicioExp(int fechaInicioExp) {
        this.fechaInicioExp = fechaInicioExp;
    }

    public int getFechaFinExp() {
        return fechaFinExp;
    }

    public void setFechaFinExp(int fechaFinExp) {
        this.fechaFinExp = fechaFinExp;
    }

    public String getDescExp() {
        return descExp;
    }

    public void setDescExp(String descExp) {
        this.descExp = descExp;
    }

    public String getImagenExp() {
        return imagenExp;
    }

    public void setImagenExp(String imagenExp) {
        this.imagenExp = imagenExp;
    }
}
