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
  experiencia: any = null;
  id: any = null;

  empresa: string = '';
  anoInicio: any = null;
  anoFin: any = null;
  descripcion: string = null;

  constructor(private sExperiencia: SExperienciaService,
    private activatedRouter:ActivatedRoute,
    private router:Router)
  { };

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id']; //acá capturo el id de la experiencia que quiero modificar
    this.getExperiencia();
  }

  handleChange(e:Event): void {
    const inputValue = (<HTMLInputElement>e.target).value;
    const inputName = (<HTMLInputElement>e.target).name;

    this.experiencia = {
      ...this.experiencia,
      [inputName]: inputValue
    }
    console.log(this.experiencia);
  }

  onUpdate(e: Event):void{
    e.preventDefault();
    const id = this.activatedRouter.snapshot.params['id'];

    const formData = new FormData();

    formData.append('empresa', this.experiencia.empresa);
    formData.append('anoFin', this.experiencia.anoFin);
    formData.append('anoInicio', this.experiencia.anoInicio);
    formData.append('descripcion', this.experiencia.descripcion);

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

  getExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => {
      const expFiltered = data.filter((el) => el.idExp === parseInt(this.id))[0];
      console.log(expFiltered);
      this.experiencia = expFiltered
    }, (err: any) => {
      console.log(err)
    })
  }
}
