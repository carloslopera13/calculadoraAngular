import { Component, OnInit } from '@angular/core';
import {Tecnico} from '../registro/Tecnico'
import {TecnicoService} from '../registro/tecnico.service';

@Component({
  selector: 'app-crear-tecnico',
  templateUrl: './crear-tecnico.component.html',
  styleUrls: ['./crear-tecnico.component.css']
})
export class CrearTecnicoComponent implements OnInit {

  tecnico: Tecnico = new Tecnico();

  constructor(private tecnicoService:TecnicoService) { }

  ngOnInit(): void {

  }

  guardar(): void{
    console.log(this.tecnico)

   if(this.tecnico.fechaInicio < this.tecnico.fechaFin ) {
    this.tecnicoService.guardarTecnico(this.tecnico).subscribe(
      t => (this.tecnico= t)
    )
    alert('Técnico agregado correctamente')
   }else{
    alert('La Fecha Inicio debe ser menor a la fecha fin, volver a ingresar fechas')
   }
  }

}
