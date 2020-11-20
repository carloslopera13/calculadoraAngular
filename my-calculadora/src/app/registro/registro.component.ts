import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Tecnico} from './Tecnico'
import { TecnicoService } from './tecnico.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  title:string="Reporte de técnicos";
  tecnicos: Tecnico[];

  constructor(private tecnicoService:TecnicoService, private router: Router) { }

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

  // eliminarTecnico(idTecnico : string): void{
  //   this.tecnicoService.eliminarTecnico(idTecnico).subscribe(()=>{
  //     this.listarTecnicos()
  //   }
      
  //   )
  // }
}
