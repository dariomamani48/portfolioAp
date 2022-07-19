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
  experiencias: Experiencia[]=[];
  public editarExp: Experiencia| undefined;
  public deleteExp: Experiencia | undefined;


  

  constructor(private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    this.getExperiencia();
  }
  getExperiencia(){
    this.experienciaService.getExperiencia().subscribe(data =>{
      this.experiencias = data});
  }

  public onOpenModal(mode: string, exp?: Experiencia): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addExpModal');
    } else if (mode === 'delete') {
      this.deleteExp = exp;
      button.setAttribute('data-bs-target', '#deleteExpModal');
    } else if (mode === 'edit') {
      this.editarExp = exp;
      button.setAttribute('data-bs-target', '#editExpModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddExp(addForm: NgForm): void {
    document.getElementById('add-exp-form')?.click();
    this.experienciaService.addExperiencia(addForm.value).subscribe({
      next: (response: Experiencia) => {
        console.log(response);
        this.getExperiencia()
        addForm.reset();
      }
    })
  }

  public onUpdateExp(tecnoEdit: Experiencia): void {
    this.editarExp= tecnoEdit
    this.experienciaService.updateExperiencia(tecnoEdit).subscribe( data =>{
      this.editarExp = data;
      console.log(data);
      this.getExperiencia()
    })
  }

  public onDeleteExp(id: number): void {
    this.experienciaService.deleteExperiencia(id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getExperiencia()
      }
    })
  }


}
