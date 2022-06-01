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

}
