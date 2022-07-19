import { HttpErrorResponse } from '@angular/common/http';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones: Educacion[]=[];
  public editarEdu: Educacion| undefined;
  public deleteEdu: Educacion | undefined;


  

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.traerTecnologia();
  }
  traerTecnologia(){
    this.educacionService.getEducacion().subscribe(data =>{
      this.educaciones = data});
  }

  public onOpenModal(mode: string, edu?: Educacion): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addEduModal');
    } else if (mode === 'delete') {
      this.deleteEdu = edu;
      button.setAttribute('data-bs-target', '#deleteEduModal');
    } else if (mode === 'edit') {
      this.editarEdu = edu;
      button.setAttribute('data-bs-target', '#editEduModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddEducacion(addForm: NgForm): void {
    document.getElementById('add-edu-form')?.click();
    this.educacionService.addEducation(addForm.value).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.traerTecnologia()
        addForm.reset();
      }
    })
  }

  public onUpdateEdu(tecnoEdit: Educacion): void {
    this.editarEdu= tecnoEdit
    this.educacionService.updateEducation(tecnoEdit).subscribe( data =>{
      this.editarEdu = data;
      console.log(data);
      this.traerTecnologia()
    })
  }

  public onDeleteEdu(id: number): void {
    this.educacionService.deleteEducation(id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.traerTecnologia()
      }
    })
  }

/* ublic logIn(){
  this.aut.UsuarioAUtenticado();
} */
  
public verSession(){
  if(sessionStorage.getItem('currentUser')){
    return true;
  }else{
    return false;
  }
}
}
