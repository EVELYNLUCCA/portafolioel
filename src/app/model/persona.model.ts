export class persona {
  id?: number;
  nombre: string;
  apellido: string;
  titulo: string;
  acercaDeMi: string;
  fotoPerfil: string;

  constructor(nombre: string, apellido:string, titulo: string, acercaDeMi: string, fotoPerfil: string){
      this.nombre = nombre,
      this.apellido = apellido,
      this.titulo = titulo,
      this.acercaDeMi = acercaDeMi,
      this.fotoPerfil = fotoPerfil
  }
}
