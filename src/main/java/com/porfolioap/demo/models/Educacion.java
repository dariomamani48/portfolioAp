package com.porfolioap.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Educacion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idEdu;
    private String tituloEdu;
    private int fechaInicioEdu;
    private int fechaFinEdu;
    private String descEdu;
    private String imagenEdu;

    public Educacion() {
    }

    public Educacion(Long idEdu, String tituloEdu, int fechaInicioEdu, int fechaFinEdu, String descEdu, String imagenEdu) {
        this.idEdu = idEdu;
        this.tituloEdu = tituloEdu;
        this.fechaInicioEdu = fechaInicioEdu;
        this.fechaFinEdu = fechaFinEdu;
        this.descEdu = descEdu;
        this.imagenEdu = imagenEdu;
    }

    public Long getIdEdu() {
        return idEdu;
    }

    public void setIdEdu(Long idEdu) {
        this.idEdu = idEdu;
    }

    public String getTituloEdu() {
        return tituloEdu;
    }

    public void setTituloEdu(String tituloEdu) {
        this.tituloEdu = tituloEdu;
    }

    public int getFechaInicioEdu() {
        return fechaInicioEdu;
    }

    public void setFechaInicioEdu(int fechaInicioEdu) {
        this.fechaInicioEdu = fechaInicioEdu;
    }

    public int getFechaFinEdu() {
        return fechaFinEdu;
    }

    public void setFechaFinEdu(int fechaFinEdu) {
        this.fechaFinEdu = fechaFinEdu;
    }

    public String getDescEdu() {
        return descEdu;
    }

    public void setDescEdu(String descEdu) {
        this.descEdu = descEdu;
    }

    public String getImagenEdu() {
        return imagenEdu;
    }

    public void setImagenEdu(String imagenEdu) {
        this.imagenEdu = imagenEdu;
    }
}
