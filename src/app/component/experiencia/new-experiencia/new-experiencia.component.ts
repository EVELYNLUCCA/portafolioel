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
  institucionExp: string = '';
  tituloExp: string = '';
  anoInicioExp!: number;
  anoFinExp!: number;

  constructor(private sExperiencia: SExperienciaService, private router:Router ){ }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.institucionExp, this.tituloExp, this.anoInicioExp, this.anoFinExp);
    this.sExperiencia.save(expe).subscribe(data=>{
      alert("Experiencia añadida");
      this.router.navigate(['nuevaexp']);
    }, err=> {
    alert("Falló");
    this.router.navigate(['nuevaexp']);
    }
    )
  }
}
