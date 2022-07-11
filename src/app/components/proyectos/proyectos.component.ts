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
  proyectos: Proyectos[]=[];
  public editarProy: Proyectos| undefined;
  public deleteProy: Proyectos | undefined;


  

  constructor(private proyectosService:ProyectosService) { }

  ngOnInit(): void {
    this.traerTecnologia();
  }
  traerTecnologia(){
    this.proyectosService.getProyectos().subscribe(data =>{
      this.proyectos = data});
  }

  public onOpenModal(mode: string, pro?: Proyectos): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addProModal');
    } else if (mode === 'delete') {
      this.deleteProy = pro;
      button.setAttribute('data-bs-target', '#deleteProModal');
    } else if (mode === 'edit') {
      this.editarProy = pro;
      button.setAttribute('data-bs-target', '#editProModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddTecnologia(addForm: NgForm): void {
    document.getElementById('add-pro-form')?.click();
    this.proyectosService.addProyecto(addForm.value).subscribe({
      next: (response: Proyectos) => {
        console.log(response);
        this.traerTecnologia()
        addForm.reset();
      }
    })
  }

  public onUpdateTec(tecnoEdit: Proyectos): void {
    this.editarProy= tecnoEdit
    this.proyectosService.updateProyecto(tecnoEdit).subscribe( data =>{
      this.editarProy = data;
      console.log(data);
      this.traerTecnologia()
    })
  }

  public onDeleteTec(id: number): void {
    this.proyectosService.deleteProyecto(id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.traerTecnologia()
      }
    })
  }

}
