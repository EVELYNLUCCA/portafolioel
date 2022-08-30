export class persona {
  id?: number;
  nombre: string;
  apellido: string;
  titulo: string;
  acercaDeMi: string;
  fotoPerfil: string;
  banner: string;

  constructor( nombre: string, apellido:string, titulo: string, acercaDeMi: string, fotoPerfil: string, banner: string){
    this.nombre = nombre,
      this.apellido = apellido,
      this.titulo = titulo,
      this.acercaDeMi = acercaDeMi,
      this.fotoPerfil = fotoPerfil,
      this.banner = banner
  }
}
