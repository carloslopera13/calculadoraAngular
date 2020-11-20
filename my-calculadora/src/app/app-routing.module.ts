import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearTecnicoComponent } from './crear-tecnico/crear-tecnico.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  {
    path: 'registroTecnico',
    component: RegistroComponent
  },
    {
        path: 'crearTecnico',
        component: CrearTecnicoComponent
      },
      {
        path: ' ',
        redirectTo:'registroTecnico'
      },
      {
        path: '**',
        redirectTo: 'registroTecnico'
      }
      
    ];
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }