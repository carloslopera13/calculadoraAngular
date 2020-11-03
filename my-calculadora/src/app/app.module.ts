import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearTecnicoComponent } from './crear-tecnico/crear-tecnico.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    CrearTecnicoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
