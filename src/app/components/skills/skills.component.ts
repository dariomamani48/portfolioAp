import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tecnologias } from 'src/app/models/tecnologias';
import { TecnologiasService } from 'src/app/servicios/tecnologias.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public tecnologias:Tecnologias[]=[];
  public tecnologiaEdit:Tecnologias|undefined;
  form:FormGroup;
  formedit:FormGroup;

  constructor(private tecnologiasService:TecnologiasService,private fb:FormBuilder,private fbedit:FormBuilder) { 
    this.form=this.fb.group({
      nombreTec:'',
      fotoTec:'',
      porcentaje:''
    
  })

  this.formedit=this.fbedit.group({
    idTecnologias:['',''],
    nombreTec:['',''],
      fotoTec:['',''],
      porcentaje:['','']
    
  })
  }

  ngOnInit(): void {
    this.getTecnologias();
  }

  public getTecnologias():void{ /* No tocar Funciona ok */
      this.tecnologiasService.getTecnologias().subscribe({
      next:(Response: Tecnologias[]) =>{
        this.tecnologias=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
  }

  public onAddTecnologia(){/* no tocar Funciona ok */
    const newTecnologia:Tecnologias={
    
    nombreTec:this.form.value.nombreTec,
    fotoTec:this.form.value.fotoTec,
    porcentaje:this.form.value.porcentaje
    }
    console.log(newTecnologia)
    this.tecnologiasService.addTecnologia(newTecnologia).subscribe({
      next:(response:Tecnologias)=>{
        console.log(response)
        this.getTecnologias();
        this.form.reset();
      },error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
  }


  /* editar nuevo metodo */
  public onEditarTecnologia(){/* no Funciona ok */
    const tecnologiaEdit:Tecnologias
    ={
    idTecnologias:this.formedit.value.idTecnologias,
    nombreTec:this.formedit.value.nombreTec,
    fotoTec:this.formedit.value.fotoTec,
    porcentaje:this.formedit.value.porcentaje
    
    }
    console.log(tecnologiaEdit)
    /* this.tecnologiasService.updateTecnologia(newTecnologiaEdit).subscribe({
      next:(response:Tecnologias)=>{
        console.log(response)
        this.getTecnologias();
        this.form.reset();
      },error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    }) */
  }

/* fin */
  

  public onDeleteTec(idTec:number):void{/* Funciona No Tocar */
    console.log(idTec)
    this.tecnologiasService.deleteTecnologia(idTec).subscribe({
      next:(response:void)=>{
        this.getTecnologias();
        console.log(response);
      },error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
  }

}
