import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-nuevapersona',
  templateUrl: './nuevapersona.component.html',
  styleUrls: ['./nuevapersona.component.css']
})
export class NuevapersonaComponent implements OnInit {
  info: persona = {
    nombre: '',
    apellido: '',
    titulo: '',
    acercaDeMi: '',
    fotoPerfil: '',
    banner: ''
  };

  constructor(private personaService: PersonaService, private router:Router) { }

  ngOnInit(): void {
  }

  crearInfo(){
    const formData = new FormData;

    formData.append('nombre', this.info.nombre);
    formData.append('apellido', this.info.apellido);
    formData.append('titulo', this.info.titulo);
    formData.append('acercaDeMi', this.info.acercaDeMi);
    formData.append('fotoPerfil', this.info.fotoPerfil);
    formData.append('fotoBanneer', this.info.banner);

    this.personaService.postPersona(this.info).subscribe(data => {
      alert('agregado correctamente :D');
      this.router.navigate(['']);
    }, err => {
      alert('ha ocurrido un error');
      console.log(err);
    })
  }
}
