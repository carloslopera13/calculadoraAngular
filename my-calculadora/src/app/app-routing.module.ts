import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearTecnicoComponent } from './crear-tecnico/crear-tecnico.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
    {
        path: 'crearTecnico',
        component: CrearTecnicoComponent
      },
      {
        path: 'registroTecnico',
        component: RegistroComponent
      },
      {
        path: ' ',
        redirectTo:'crearTecnico'
      },
      {
        path: '**',
        redirectTo: 'crearTecnico'
      }
      
    ];
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }