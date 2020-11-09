import { Component, Input, OnInit } from '@angular/core';
import {Tecnico} from './Tecnico'
import { TecnicoService } from './tecnico.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  tecnicos: Tecnico[];

  constructor(private tecnicoService:TecnicoService) { }

  ngOnInit(): void {
    this.listarTecnicos()
  }

  ngOnChanges(): void{
    this.listarTecnicos()
  }

  listarTecnicos(): void{
    this.tecnicoService.getAll().subscribe(
      data => (this.tecnicos= data)
    )
  }
}
