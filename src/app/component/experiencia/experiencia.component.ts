import { SExperienciaService } from './../../service/s-experiencia.service';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia [] = [];
  constructor(private sExperiencia: SExperienciaService, private tokenService:TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {
      this.expe = data;
      console.log(this.expe);
    })
  }

  delete(id?:number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}

