import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/service/skills.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
  formToSend: any = {
    nombreSkill: '',
    imgSkill: '',
    porcentajeSkill: ''
  }
  id: any = null;

  constructor(private skillService:SkillsService, private router:Router, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.getSkill();
    console.log(this.formToSend);
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

    formData.append('nombreSkill', this.formToSend.nombreSkill);
    formData.append('imgSkill', this.formToSend.imgSkill);
    formData.append('porcentajeSkill', this.formToSend.porcentajeSkill);

    this.skillService.updateSkill(formData, this.id).subscribe((data) => {
      alert("Se ha editado correctamente! :D");
      this.router.navigate(['']);
    }, (err) => {
      alert("Ha ocurrido un error: " + err);
    })
  }

  getSkill(): void{
    this.skillService.getSkills().subscribe((data) => {
      const skillSearched = data.filter((el: any) => el.idSkill === parseInt(this.id))[0];
      console.log(skillSearched);
      this.formToSend = skillSearched;
    }, (err) => {
      console.log('error al traer las cositas')
    })
  }

}
