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
    this.tecnicoService.guardarTecnico(this.tecnico).subscribe(
      t => (this.tecnico= t)
    )
  }

}
