import { persona } from './../../model/persona.model';
import { PersonaService } from './../../service/persona.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.component.html',
  styleUrls: ['./editinfo.component.css']
})
export class EditinfoComponent implements OnInit {
  infoEditada: persona | undefined = {
    nombre: '',
    apellido: '',
    titulo: '',
    acercaDeMi: '',
    fotoPerfil: '',
    banner: ''
  };

  id: number;

  constructor(private personaService:PersonaService, private activatedRouter: ActivatedRoute, private router:Router) { }


  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
  }

  editarInfo(): void {
    const formData = new FormData;

    formData.append('nombre', this.infoEditada.nombre);
    formData.append('apellido', this.infoEditada.apellido);
    formData.append('titulo', this.infoEditada.titulo);
    formData.append('acercaDeMi', this.infoEditada.acercaDeMi);
    formData.append('fotoPerfil', this.infoEditada.fotoPerfil);
    formData.append('banner', this.infoEditada.banner);

    this.personaService.putPersona(formData, this.id).subscribe(data => {
      alert('editado correctamente :D');
      this.router.navigate(['']);
    }, err => {
      alert('ha ocurrido un error');
      console.log(err);
      this.router.navigate(['']);
    })
  }
}
