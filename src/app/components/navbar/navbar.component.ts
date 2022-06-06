import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AutenticacionService, private ruta:Router) { 
  }

  ngOnInit(): void {
    console.log(this.userOn())
  }

  logOut(){
    this.auth.cerrarSession();
    this.ruta.navigate(['/login'])
  }

  public userOn(){
    if(sessionStorage.getItem('currentUser')){
      return true;
    }else{
      return false;
    }
  }

}
