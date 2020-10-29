import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Tecnico} from './Tecnico'

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  private url:string="http://localhost:8085/api/reportes"

  constructor(private http: HttpClient) { }

  // Obtener estudiantes
  getAll():Observable<Tecnico[]>{
    return this.http.get<Tecnico[]>(this.url)

  }
}
