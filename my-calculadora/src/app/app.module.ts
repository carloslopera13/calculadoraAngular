import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router'

import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearTecnicoComponent } from './crear-tecnico/crear-tecnico.component';
import { AppRoutingModule } from './app-routing.module';


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
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
