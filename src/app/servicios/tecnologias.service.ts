
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tecnologias } from '../models/tecnologias';


@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }


  /* metodos */
  public getTecnologias():Observable<Tecnologias[]>{
    return this.http.get<Tecnologias[]>(`${this.apiServerUrl}/api/tecnologias/all`)
  }



  public addTecnologia(tecnologia: Tecnologias):Observable<Tecnologias>{
    return this.http.post<Tecnologias>(`${this.apiServerUrl}/api/tecnologias/addtecnologia`,tecnologia);
  }




  public updateTecnologia(tecnologia: Tecnologias):Observable<Tecnologias>
  {
    return this.http.put<Tecnologias>(`${this.apiServerUrl}/api/tecnologias/update`,tecnologia);
  }



  public deleteTecnologia(tecnologiaID: number):Observable<void>
  {
    return this.http.delete<void>(`${this.apiServerUrl}/api/tecnologias/eliminar/${tecnologiaID}`);
  }

}
