import { Router } from '@angular/router';
import { Educacion } from './../../model/educacion';
import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private educacionS: EducacionService, private tokenService:TokenService, private router:Router) {

  }

  isLogged = false;

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  delete(id: number){
    if(id != undefined){
      this.educacionS.delete(id).subscribe(
        data =>{
          this.cargarEducacion()
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
