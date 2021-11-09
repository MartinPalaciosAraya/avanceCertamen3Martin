import { Component, OnInit } from '@angular/core';
import{ListaNoticias}from '../interfaces/noticias';
//import {ListaNoticiasDestacadas}from '../interfaces/noticias';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  ListaNoticias=ListaNoticias;
  //ListaNoticiasDestacadas=ListaNoticiasDestacadas;
  constructor() { }

  ngOnInit(): void {
  }

}
