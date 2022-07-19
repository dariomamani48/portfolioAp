import { Component, OnInit } from '@angular/core';
import { Tecnologias } from 'src/app/models/tecnologias';
import { TecnologiasService } from 'src/app/servicios/tecnologias.service';



import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css'],
  
})
export class TecnologiasComponent implements OnInit {
  tecnologias: Tecnologias[]=[];
  public editarTec: Tecnologias| undefined;
  public deleteTec: Tecnologias | undefined;


  

  constructor(private tecnologiasService:TecnologiasService) { 
    
  }

  ngOnInit(): void {
    this.traerTecnologia();
  }
  traerTecnologia(){
    this.tecnologiasService.getTecnologias().subscribe(data =>{
      this.tecnologias = data});
  }

  public onOpenModal(mode: string, tec?: Tecnologias): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addTecModal');
    } else if (mode === 'delete') {
      this.deleteTec = tec;
      button.setAttribute('data-bs-target', '#deleteTecModal');
    } else if (mode === 'edit') {
      this.editarTec = tec;
      button.setAttribute('data-bs-target', '#editTecModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public onAddTecnologia(addForm: NgForm): void {
    document.getElementById('add-tec-form')?.click();
    this.tecnologiasService.addTecnologia(addForm.value).subscribe({
      next: (response: Tecnologias) => {
        console.log(response);
        this.traerTecnologia()
        addForm.reset();
      }
    })
  }

  public onUpdateTec(tecnoEdit: Tecnologias): void {
    this.editarTec= tecnoEdit
    this.tecnologiasService.updateTecnologia(tecnoEdit).subscribe( data =>{
      this.editarTec = data;
      console.log(data);
      this.traerTecnologia()
    })
  }

  public onDeleteTec(id: number): void {
    this.tecnologiasService.deleteTecnologia(id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.traerTecnologia()
      }
    })
  }

}


