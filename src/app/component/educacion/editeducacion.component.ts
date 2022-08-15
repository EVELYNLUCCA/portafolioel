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
  id: number = null;

  constructor(private educacionS: EducacionService, private activatedRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
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

      formData.append('institucionEdu', this.formToSend.institucionEdu);
      formData.append('tituloEdu', this.formToSend.tituloEdu);
      formData.append('anoInicioEdu', this.formToSend.anoInicioEdu);
      formData.append('anoFinEdu', this.formToSend.anoFinEdu);

      this.educacionS.update(this.id, formData).subscribe((data) => {
        alert("Se ha editado correctamente! :D");
        this.router.navigate(['']);
      }, (err) => {
        alert("Ha ocurrido un error: " + err);
      })
    }
}
