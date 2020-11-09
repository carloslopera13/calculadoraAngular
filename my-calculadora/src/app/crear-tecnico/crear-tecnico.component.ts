import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {Tecnico} from '../registro/Tecnico'
import {TecnicoService} from '../registro/tecnico.service';

@Component({
  selector: 'app-crear-tecnico',
  templateUrl: './crear-tecnico.component.html',
  styleUrls: ['./crear-tecnico.component.css']
})
export class CrearTecnicoComponent implements OnInit {

  // tecnicos : FormGroup;
  tecnico: Tecnico = new Tecnico();

  constructor(private tecnicoService:TecnicoService, private router: Router) 
  {
    // this.tecnicos = new FormGroup (
    //   {
    //     'idTecnico' : new FormControl('', [Validators.required]),
    //     'idServico' : new FormControl('', [Validators.required]),
    //     'fechaInicio' : new FormControl('', [Validators.required]),
    //     'fechaFin' : new FormControl('', [Validators.required]),
    //   }
    // )
   }

  ngOnInit(): void {
    // this.tecnico = this.tecnicoService.guardar();
  }

  guardar(){
    console.log(this.tecnico)
    if(this.tecnico.fechaInicio < this.tecnico.fechaFin ) {
        this.tecnicoService.guardarTecnico(this.tecnico).subscribe(
          // res => this.router.navigate(['/crear'])
          res => (this.tecnico= res)
        )
        alert('Técnico agregado correctamente')
        this.router.navigate(['/registroTecnico'])
       }else{
        alert('La Fecha Inicio debe ser menor a la fecha fin, volver a ingresar fechas')
       }
  }

}
