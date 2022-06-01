import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public experiencia:Experiencia[]=[];
  public EdiExperiencia:Experiencia;

  constructor(private experienciaService: ExperienciaService) { 
    this.EdiExperiencia={
      tituloExp:'',
      fechaInicioExp:'',
      fechaFinExp:'',
      descExp:'',
      imagenExp:''
    }
  }

  ngOnInit(): void {
    this.getExperiencias();
  }

  public getExperiencias():void{/* funciona no tocar */

    this.experienciaService.getExperiencia().subscribe({
      next:(Response: Experiencia[]) =>{
        this.experiencia=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
  }

  public onAddExperiencia(addForm: NgForm):void{/* fucniona no tocar! */
    this.experienciaService.addExperiencia(addForm.value).subscribe({
      next:(response:Experiencia)=>{
        console.log(response);
        this.getExperiencias();
        addForm.reset();
      },error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
  }

  public onEditExperiencia(experiencia:Experiencia){
    this.EdiExperiencia=experiencia
    this.experienciaService.updateExperiencia(experiencia).subscribe({
      next:(response:Experiencia)=>{
        console.log(response);
        this.getExperiencias();
        
      },error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })



  }

  public onDeleteExperiencia(idExp:number):void{/* No tocar Funciona */
    this.experienciaService.deleteExperiencia(idExp).subscribe({
      next:(response:void)=>{
        console.log(response);
        this.getExperiencias();
    },error:(error:HttpErrorResponse)=>{
      alert(error.message);
      
    }
    })
  }

}
