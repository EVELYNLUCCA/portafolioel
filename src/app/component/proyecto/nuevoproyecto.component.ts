import { Router } from '@angular/router';
import { ProyectoService } from './../../service/proyecto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevoproyecto',
  templateUrl: './nuevoproyecto.component.html',
  styleUrls: ['./nuevoproyecto.component.css']
})

export class NuevoproyectoComponent implements OnInit {
  form: any = {
  };

  constructor(private proyectoService:ProyectoService, private router:Router) { }

  ngOnInit(): void {}

  handleCreate(): void {
    this.proyectoService.createProyecto(this.form).subscribe(data => {
      alert('agregado correctamente!');
      console.log(data);
      this.router.navigate(['']);
    }, err => {
      console.log(err);
    })
  }

}
