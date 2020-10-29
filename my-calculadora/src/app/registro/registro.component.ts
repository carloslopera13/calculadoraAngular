import { Component, OnInit } from '@angular/core';
import {Tecnico} from './Tecnico'
import { TecnicoService } from './tecnico.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  title="Reporte del servicio";

  tecnicos: Tecnico[];

  constructor(private tecnicoService:TecnicoService) { }

  ngOnInit(): void {
    this.tecnicoService.getAll().subscribe(
     t => this.tecnicos=t
    )
  }

}
