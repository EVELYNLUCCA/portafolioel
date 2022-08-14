export class Skills {
  idSkill: number;
  nombreSkill: string;
  imgSkill: string;
  porcentajeSkill: number;

  constructor(nombreSkill: string, imgSkill: string, porcentajeSkill: number){
  this.nombreSkill = nombreSkill;
  this.imgSkill = imgSkill;
  this.porcentajeSkill = porcentajeSkill;
  }
}
