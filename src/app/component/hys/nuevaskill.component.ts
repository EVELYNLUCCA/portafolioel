import { SkillsService } from './../../service/skills.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevaskill',
  templateUrl: './nuevaskill.component.html',
  styleUrls: ['./nuevaskill.component.css']
})
export class NuevaskillComponent implements OnInit {
  formToSend: any = {}

  constructor(private skillService:SkillsService, private router:Router) { }

  ngOnInit(): void {
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
    this.skillService.createSkill(this.formToSend).subscribe((data) => {
      alert("Se ha creado correctamente! :D");
      this.router.navigate(['']);
    }, (err) => {
      alert("Ha ocurrido un error: " + err);
    })
  }


}
