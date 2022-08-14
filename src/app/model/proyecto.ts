export class Proyecto {
  idProy: number;
  nombreProyecto: string;
  descripcion: string;
  url: string;
  fotoProyecto: string;

  constructor(nombreProyecto: string, descripcion: string, url: string, fotoProyecto: string){
  this.nombreProyecto = nombreProyecto;
  this.descripcion = descripcion;
  this.url = url;
  this.fotoProyecto = fotoProyecto;
  }
}
