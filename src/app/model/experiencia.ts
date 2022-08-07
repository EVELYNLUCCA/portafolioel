export class Experiencia {
  idExp? : number;
  institucionExp?: string;
  tituloExp?: string;
  anoInicioExp?: number;
  anoFinExp?: number;

  constructor(institucionExp: string, tituloExp: string, anoInicioExp: number, anoFinExp: number){
    this.institucionExp = institucionExp;
    this.tituloExp = tituloExp;
    this.anoInicioExp = anoFinExp;
    this.anoFinExp = anoFinExp;
  }
}
