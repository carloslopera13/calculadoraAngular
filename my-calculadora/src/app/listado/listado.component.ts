import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input() idTecnico: string ="no id";
  // @Input() idServico: string ;
  // @Input() fechaInicio: string ;
  // @Input() fechaFin: string ;

  constructor() { }

  ngOnInit(): void {
  }

}
