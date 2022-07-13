import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { HeaderService } from 'src/app/servicios/header.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  public usuario: Usuario|undefined;
  public editarUser: Usuario| undefined;
  public deleteUser: Usuario| undefined;

  constructor(private usuarioService:HeaderService) { }

  ngOnInit(): void {
    this.getUSer();
  }

  public getUSer():void{
    this.usuarioService.getUser().subscribe({
      next: (response: Usuario)=>{
        this.usuario=response;
      },error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onOpenModal(mode: string, user?: Usuario): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addProModal');
    } else if (mode === 'delete') {
      this.deleteUser = user;
      button.setAttribute('data-bs-target', '#deleteProModal');
    } else if (mode === 'edit') {
      this.editarUser = user;
      button.setAttribute('data-bs-target', '#editUserModal');
    }

    container?.appendChild(button);
    button.click();
  }
  public onUpdateUser(userEdit: Usuario): void {
    this.editarUser= userEdit;
    this.usuarioService.updateUsuario(userEdit).subscribe( data =>{
      this.editarUser = data;
      console.log(data);
      this.getUSer();
    })
  }

}
