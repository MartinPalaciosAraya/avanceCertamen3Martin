import { Component, OnInit } from '@angular/core';

import{FormBuilder,FormGroup, Validators} from '@angular/forms';

import{ ListaNoticias  }from'../interfaces/noticias';
import{ Noticias  }from'../interfaces/noticias';

@Component({
  selector: 'app-servicioalcliente',
  templateUrl: './servicioalcliente.component.html',
  styleUrls: ['./servicioalcliente.component.scss']
})
export class ServicioalclienteComponent implements OnInit {



  activarMsg:boolean=false;

  formulario:FormGroup;


  constructor(public Form: FormBuilder) {
    this.formulario=this.Form.group({
      nombre: ["", [Validators.required,Validators.maxLength(50)]],
      apellido: ["", [Validators.required,Validators.maxLength(50)]],
      "Pais": ["", Validators.required],
      ciudad: ["", [Validators.required,Validators.maxLength(15)]],
    })
  }

  ngOnInit(): void {
  }

  mandarObjeto(){
    export let ListaNoticias: Array<Noticias>=[

      genero:this.formulario.value.genero,
      nombre :this.formulario.value.nombre,
      apellido:this.formulario.value.apellido,
      pais:this.formulario.value.pais,
      ciudad:this.formulario.value.ciudad,
    }
  ]
  }

  validacion(){
    console.log(this.formulario.get("nombre")?.value);

    this.activarMsg=true;
  }

}
