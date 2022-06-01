package com.porfolioap.demo.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Tecnologias {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idTecnologias;
    private String nombreTec;
    private String fotoTec;
    private int porcentaje;

    public Tecnologias() {
    }

    public Tecnologias(Long idTecnologias, String nombreTec, String fotoTec, int porcentaje) {
        this.idTecnologias = idTecnologias;
        this.nombreTec = nombreTec;
        this.fotoTec = fotoTec;
        this.porcentaje = porcentaje;
    }

    public Long getIdTecnologias() {
        return idTecnologias;
    }

    public void setIdTecnologias(Long idTecnologias) {
        this.idTecnologias = idTecnologias;
    }

    public String getNombreTec() {
        return nombreTec;
    }

    public void setNombreTec(String nombreTec) {
        this.nombreTec = nombreTec;
    }

    public String getFotoTec() {
        return fotoTec;
    }

    public void setFotoTec(String fotoTec) {
        this.fotoTec = fotoTec;
    }

    public int getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(int porcentaje) {
        this.porcentaje = porcentaje;
    }
}
