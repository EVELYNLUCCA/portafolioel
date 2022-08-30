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
  experiencia: Experiencia = null;

  empresa: string = '';
  anoInicio: any = null;
  anoFin: any = null;
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

    const formData = new FormData();

    formData.append('empresa', this.empresa);
    formData.append('anoFin', this.anoFin);
    formData.append('anoInicio', this.anoInicio);
    formData.append('descripcion', this.descripcion);

    this.sExperiencia.update(id, formData).subscribe(data=>{
      console.log(data);
      alert("Experiencia modificada correctamente!");
      this.router.navigate(['']);
    }, err =>{
      console.log(err);
      alert("Error al modificar experiencia");
    }
    )
  }
}
