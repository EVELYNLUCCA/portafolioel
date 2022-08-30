import { PersonaService } from 'src/app/service/persona.service';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public info: persona = {
    nombre: '',
    apellido: '',
    titulo: '',
    acercaDeMi: '',
    fotoPerfil: '',
    banner: ''
  };

  constructor(private personaservice: PersonaService, private router: Router, private activatedRouter: ActivatedRoute) { }

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
  }
}
