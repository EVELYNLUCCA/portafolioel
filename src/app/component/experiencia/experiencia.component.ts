import { SExperienciaService } from './../../service/s-experiencia.service';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: any = [];
  constructor(private sExperiencia: SExperienciaService, private tokenService:TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {
      this.expe = data;
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

