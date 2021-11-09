import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{InicioComponent}from './componentes/inicio/inicio.component';

import{DetalleNoticiaComponent}from './componentes/detalle-noticia/detalle-noticia.component';


import {HeaderComponent}from '../app/header/header.component';

import {ServicioalclienteComponent} from '../app/servicioalcliente/servicioalcliente.component';
import {NoticiasComponent} from '../app/noticias/noticias.component'
const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"detalleNoticia/:id",component:DetalleNoticiaComponent},
  {path:"detalleNoticia",component:DetalleNoticiaComponent},


  {path:"header",component:HeaderComponent},
  {path:"servicioalcliente",component:ServicioalclienteComponent},
  {path:"noticias",component:NoticiasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
