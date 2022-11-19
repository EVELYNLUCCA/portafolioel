import { EducacionService } from './../../service/educacion.service';
import { Educacion } from './../../model/educacion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  formToSend: any = {};
  id: any = null;

  constructor(private educacionS: EducacionService, private activatedRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.getEducacion();
  }

  handleChange(e:Event): void {
    const inputValue = (<HTMLInputElement>e.target).value;
    const inputName = (<HTMLInputElement>e.target).name;

    this.formToSend = {
      ...this.formToSend,
      [inputName]: inputValue
    }
    console.log(this.formToSend);
  }

    onCreate(): void{
      const formData = new FormData();

      formData.append('institucion', this.formToSend.institucionEdu);
      formData.append('titulo', this.formToSend.tituloEdu);
      formData.append('anoInicio', this.formToSend.anoInicioEdu);
      formData.append('anoFin', this.formToSend.anoFinEdu);

      this.educacionS.update(this.id, formData).subscribe((data) => {
        alert("Se ha editado correctamente! :D");
        this.router.navigate(['']);
      }, (err) => {
        alert("Ha ocurrido un error: ");
        console.log(err);
      })
    }

  getEducacion(): void{
    this.educacionS.details().subscribe((data: any) => {
      this.formToSend = data.filter((el: any) => el.idEdu === parseInt(this.id))[0];
    }, (err) => {
      console.log(err);
    })
  }
}
