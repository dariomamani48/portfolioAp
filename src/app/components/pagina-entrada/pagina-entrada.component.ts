import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { HeaderService } from 'src/app/servicios/header.service';

@Component({
  selector: 'app-pagina-entrada',
  templateUrl: './pagina-entrada.component.html',
  styleUrls: ['./pagina-entrada.component.css']
})
export class PaginaEntradaComponent implements OnInit {

  //llamada al usuario
  public usuario:Usuario|undefined;
  public editUsuario:Usuario|undefined;

  //

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.getUSer();
    
    
  }
    // metodo para susbribir al servicio que trae el usuario
  public getUSer():void{
    this.headerService.getUser().subscribe({
      next: (response: Usuario)=>{
        this.usuario=response;
      },error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
