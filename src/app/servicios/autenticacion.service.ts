import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,  Observable} from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url="https://portfodmd.herokuapp.com/api/login";
  currentSubject:BehaviorSubject<any>;
 

  constructor(private http:HttpClient) {
    console.log("el servicio corre")
    this.currentSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
   }

   iniciarSession(credenciales:any):Observable<any>{
     return this.http.post(this.url,credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser',JSON.stringify(data));
      this.currentSubject.next(data);
      
       return data;
       
     }))
   }
   

   get UsuarioAUtenticado()
   {
    return this.currentSubject.value;
   }
   cerrarSession(){
     console.log('cerrar session')
     sessionStorage.removeItem('currentUser')
   }
   public get haySession():boolean{
      return sessionStorage.getItem('currrentUser')!==null
   }
}
