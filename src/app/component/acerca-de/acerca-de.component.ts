import { PersonaService } from './../../service/persona.service';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  info: any = {};

  constructor(private personaservice: PersonaService, private tokenService:TokenService, private router:Router) { }
  isLogged = false;

  cargarInfo(): void{
    this.personaservice.getPersona().subscribe(data => {
      this.info = data[data.length - 1];
      console.log(this.info);
    }, err => {
      console.log(err);
      alert('salio mal')
    })
  }

  ngOnInit(): void {
    this.cargarInfo();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  deletePersona(id:number){
    if(id != undefined){
      this.personaservice.deletePersona(id).subscribe(
        (data: any) => {
          alert('borrado correctamente');
          this.cargarInfo();
        }, (err: any) => {
          alert("No se pudo borrar la info");
          console.log(err);
        }
      )
    }
  }


}
