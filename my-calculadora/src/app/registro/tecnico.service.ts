import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Tecnico} from './Tecnico'

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  private url:string="http://localhost:8080/api/tecnicos";
  private urlPost:string="http://localhost:8080/api/tecnicos/crear"

  constructor(private http: HttpClient) { }

  // Obtener estudiantes
  getAll():Observable<Tecnico[]>{
    return this.http.get<Tecnico[]>(this.url)
  }

  guardarTecnico(tecnico:Tecnico):Observable<Tecnico>{
    return this.http.post<Tecnico>(this.urlPost, tecnico)
  }

  // eliminarTecnico(idTecnico:string):Observable<any>{
  //   return this.http.delete(this.url +'/'+ idTecnico)
  // }


}
