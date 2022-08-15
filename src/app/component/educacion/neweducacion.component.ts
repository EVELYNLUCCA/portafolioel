import { Router } from '@angular/router';
import { EducacionService } from './../../service/educacion.service';
import { Component, OnInit } from '@angular/core';
import { Educacion } from './../../model/educacion';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  institucionEdu: string;
  anoInicioEdu: number;
  anoFinEdu: number;
  tituloEdu: string;

  constructor(private educacionS: EducacionService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(e: Event): void{
    e.preventDefault
    const educacion = new Educacion(this.institucionEdu, this.tituloEdu, this.anoInicioEdu, this.anoFinEdu);

    this.educacionS.save(educacion).subscribe(
      data => {
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
