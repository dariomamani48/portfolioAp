import { HttpErrorResponse } from '@angular/common/http';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  form: FormGroup;
  editForm: FormGroup;

  public educaciones:Educacion[]=[];
  public editarEducacion: Educacion|undefined;
  public eliminarEducacion: Educacion|undefined;

  constructor(private educacionService: EducacionService,private fb:FormBuilder, private fbEdit:FormBuilder) {
    this.form= this.fb.group({
      tituloEdu:['',[Validators.required,Validators.maxLength(20), Validators.minLength(5)]],
      fechaInicioEdu:['',[Validators.required,Validators.maxLength(16), Validators.minLength(16)]],
      fechaFinEdu:['',[Validators.required,Validators.maxLength(16), Validators.minLength(4)]],
      descEdu:['',[Validators.required,Validators.maxLength(300), Validators.minLength(3)]],
      imagenEdu:['',[Validators.required,Validators.maxLength(300), Validators.minLength(3)]]
    })


    this.editForm=this.fbEdit.group({
      tituloEdu:'',
      fechaInicioEdu:'',
      fechaFinEdu:'',
      descEdu:'',
      idEdu:'',
      imagenEdu:''
    })
   }



  ngOnInit(): void {
    this.getEducaciones();
    

  }
  public getEducaciones():void{

    this.educacionService.getEducacion().subscribe({
      next:(Response: Educacion[]) =>{
        this.educaciones=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
  }

 

  public onAddEducacion(){
    
    const newEducacion:Educacion={
      tituloEdu: this.form.value.tituloEdu,
    fechaInicioEdu:this.form.value.fechaInicioEdu,
    fechaFinEdu:this.form.value.fechaFinEdu,
    descEdu:this.form.value.descEdu,
    imagenEdu:this.form.value.imagenEdu
    }
    console.log(newEducacion)
    this.educacionService.addEducation(newEducacion).subscribe({
      next:(response:Educacion)=>{
        console.log(response);
        this.getEducaciones();
        this.form.reset()
      },error:(error:HttpErrorResponse)=>{
        alert(error.message);
        
      }

    })
  }

  public onEditEducacion(educacion:Educacion){
    /* this.editarEducacion={
      tituloEdu:this.editForm.value.tituloEdu,
      fechaInicioEdu:this.editForm.value.fechaInicioEdu,
      fechaFinEdu:this.editForm.value.fechaFinEdu,
      descEdu:this.editForm.value.descEdu,
      
      imagenEdu:this.editForm.value.imagenEdu
    }
     */
    this.editarEducacion=educacion;
    
    console.log(this.editarEducacion)

    this.educacionService.updateEducation(educacion).subscribe({
      next:(res:Educacion)=>{
        this.getEducaciones();
        this.form.reset()
      },error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    })
  }



  
  public onDeleteEducacion(idEdu:number):void{

    
    this.educacionService.deleteEducation(idEdu).subscribe({
      next:(response:void)=>{
        console.log(response);
        this.getEducaciones();
        this.form.reset()
      },error:(error:HttpErrorResponse)=>{
        alert(error.message);
        
      }
    })
  }

}
