export interface Noticias {
  id:number;
  genero:string;
  nombre:string;
  apellido:string;
  pais:string;
  ciudad:string;
}
export let ListaNoticias: Array<Noticias>=[

  {
    id:1,
    genero:"Mujer",
    nombre:"Pepita",
    apellido:"Cruz",
    pais:"Chile",
    ciudad:"Valparaiso"
  },

  {
    id:2,
    genero:"Hombre",
    nombre:"Juan",
    apellido:"Totto",
    pais:"Chile",
    ciudad:"Metropolitana"
  },
  {
    id:3,
    genero:"Hombre",
    nombre:"Pedro",
    apellido:"Tijuana",
    pais:"Chile",
    ciudad:"Metropolitana"
  },
  {
    id:4,
    genero:"Mujer",
    nombre:"Juana",
    apellido:"de Arco",
    pais:"Chile",
    ciudad:"Valparaiso"
  },

];
