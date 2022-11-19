import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProyectoService } from './../../service/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  proyecto : Proyecto | null;
  form: any = {};
  id: any = 0;

  constructor(private proyectoService:ProyectoService, private activatedRoute:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getProyecto();
  }

  handleChange(e: Event){
    const inputValue = (<HTMLInputElement>e.target).value;
    const inputName = (<HTMLInputElement>e.target).name;

    this.form = {
      ...this.form,
      [inputName]: inputValue
    }

    console.log(this.form);
  }

  handleEdit(){
    const formData = new FormData;

    formData.append('nombreProyecto', this.form.nombreProyecto);
    formData.append('descripcion', this.form.descripcion);
    formData.append('url', this.form.url);
    formData.append('fotoProyecto', this.form.fotoProyecto);

    this.proyectoService.updateProyecto(formData, this.id).subscribe(data => {
      alert('editado correctamente ;)');
      this.route.navigate(['']);
    }, err => {
      alert('ocurrio un error');
    });
  }

  getProyecto(): void {
    this.proyectoService.getProyecto().subscribe((data) => {
      console.log(data);
      this.form = data.filter(el=> el.idProy == parseInt(this.id))[0];
      console.log(this.form);
    }, (err) => {
      console.log(err);
    })
  };
}
