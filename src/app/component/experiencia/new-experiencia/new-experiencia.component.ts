import { Experiencia } from './../../../model/experiencia';
import { SExperienciaService } from './../../../service/s-experiencia.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  empresa: string = '';
  anoInicio!: number;
  anoFin!: number;
  descripcion: string = '';

  constructor(private sExperiencia: SExperienciaService, private router:Router ){ }

  ngOnInit(): void {
  }

  onCreate(e: Event): void{
    e.preventDefault();

    const expe = new Experiencia(this.empresa, this.anoInicio, this.anoFin, this.descripcion);

    this.sExperiencia.save(expe).subscribe(data=>{
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err=> {
    alert("Falló");
    this.router.navigate(['']);
    }
    )
  }
}
