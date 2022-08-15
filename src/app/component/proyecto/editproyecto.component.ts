import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProyectoService } from './../../service/proyecto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  form: any = {
  };
  id: number = 0;

  constructor(private proyectoService:ProyectoService, private activatedRoute:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  handleEdit(){
    const formData = new FormData;

    formData.append('nombreProyecto', this.form.nombreProyecto);
    formData.append('descripcion', this.form.descripcion);
    formData.append('url', this.form.url);
    formData.append('fotoProyecto', this.form.fotoProyecto);

    this.proyectoService.updateProyecto(formData, this.id).subscribe(data => {
      alert('cambiado correctamente ;)');
      this.route.navigate(['']);
    }, err => {
      alert('ocurrio un error');
    });
  }

}
