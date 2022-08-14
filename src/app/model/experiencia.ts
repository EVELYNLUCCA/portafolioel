export class Experiencia {
  idExp? : number;
  empresa?: string;
  anoInicio?: number;
  anoFin?: number;
  descripcion?: any;

  constructor(empresa: string, anoInicio: number, anoFin: number, descripcion: any){
    this.empresa = empresa;
    this.anoInicio = anoInicio;
    this.anoFin = anoFin;
    this.descripcion = descripcion;
  }
}
