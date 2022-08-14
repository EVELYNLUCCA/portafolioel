export class Educacion {
  idEdu: number;
  institucionEdu: string;
  tituloEdu: string;
  anoInicioEdu: number;
  anoFinEdu: number;

constructor(institucionEdu: string, tituloEdu: string, anoInicioEdu: number, anoFinEdu: number){
  this.institucionEdu = institucionEdu;
  this.tituloEdu = tituloEdu;
  this.anoInicioEdu = anoInicioEdu;
  this.anoFinEdu = anoFinEdu;
  }
}
