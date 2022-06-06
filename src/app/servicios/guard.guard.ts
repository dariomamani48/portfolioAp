import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private auth:AutenticacionService, private rutas:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currentUser=this.auth.UsuarioAUtenticado;

      if(sessionStorage.getItem('currentUser')){
        return true;
      }else{
        this.rutas.navigate(['/login']);
         return false;
      }
    
  }
  
}
