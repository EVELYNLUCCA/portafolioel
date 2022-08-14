import { SExperienciaService } from './../../service/s-experiencia.service';
import { Experiencia } from './../../model/experiencia';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  empresa: string = '';
  anoInicio: number = null;
  anoFin: number = null;
  descripcion: string = null;

  constructor(private sExperiencia: SExperienciaService,
    private activatedRouter:ActivatedRoute,
    private router:Router)
  { };

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']; //acá capturo el id de la experiencia que quiero modificar
  }

  onUpdate(e: Event):void{
    e.preventDefault();
    const id = this.activatedRouter.snapshot.params['id'];

    this.sExperiencia.update(id, {
      empresa: this.empresa,
      anoInicio: this.anoFin,
      anoFin: this.anoFin,
      descripcion: this.descripcion
    }).subscribe(data=>{
      console.log(data);
    }, err =>{
      console.log(err);
      alert("Error al modificar experiencia");
    }
    )
  }

}
