import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
public proyectosList:Proyectos[]=[];
public editProyecto:Proyectos|undefined;

  constructor(private proyectoService:ProyectosService) { }

  ngOnInit(): void {

    this.getProyectos();
  }

  public getProyectos(){
    this.proyectoService.getProyectos().subscribe({
      next:(response:Proyectos[])=>{
        this.proyectosList=response;
      },error(error:HttpErrorResponse){
        alert(error.message)
      }
    })
  }

  public onAddProyecto(addForm: NgForm):void{/* fucniona no tocar! */
    this.proyectoService.addProyecto(addForm.value).subscribe({
      next:(response:Proyectos)=>{
        console.log(response);
        this.getProyectos();
        addForm.reset();
      },error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
  }

  public onEditProyectos(proyecto:Proyectos){
    this.editProyecto=proyecto;
    
    this.proyectoService.updateProyecto(proyecto).subscribe({
      next:(response:Proyectos)=>{
        console.log(response);
        this.getProyectos();
      },error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })

  }

  public onDeleteProy(idProyectos:number):void{/* Funciona No Tocar */
    console.log(idProyectos)
    this.proyectoService.deleteProyecto(idProyectos).subscribe({
      next:(response:void)=>{
        this.getProyectos();
        console.log(response);
      },error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
  }

}
