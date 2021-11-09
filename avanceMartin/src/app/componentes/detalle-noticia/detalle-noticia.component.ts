import { Component, OnInit } from '@angular/core';

import{ListaNoticias,Noticias}from '../../interfaces/noticias';
import{ActivatedRoute,Route} from '@angular/router';
//import{ListaNoticiasDestacadas} from '../../interfaces/noticias';


@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.scss']
})
export class DetalleNoticiaComponent implements OnInit {

  //ListaNoticiasDestacadas=ListaNoticiasDestacadas;
  ListanNoticias = ListaNoticias;

  id:number=0;

  Noticia: any;

  Categoria:any="";

  constructor(private ruta: ActivatedRoute) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];
      console.log(this.id);
    })
  }



  ngOnInit(): void {
    //this.Noticia=ListaNoticiasDestacadas.find(objeto=>objeto.id==this.id);

    this.Noticia=ListaNoticias.find(objeto=>objeto.id==this.id);
    //this.Noticia=ListaNoticias.find(objeto=>objeto.id==this.id);
    //this.Noticia=ListaNoticias.find(objeto=>objeto.id==this.id);

    console.log(this.Categoria);

  }

}
