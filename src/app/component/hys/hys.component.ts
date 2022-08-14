import { SkillsService } from './../../service/skills.service';
import { Skills } from './../../model/skills';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skills: Skills[] = [];

  constructor(private skillsService: SkillsService, private router: Router) { }

  isLogged = true;

  ngOnInit(): void {
    this.cargarSkills();
  }

  cargarSkills(){
    this.skillsService.getSkills().subscribe(data => {
      this.skills = data;
      console.log(this.skills);
    });
  }

  delete(id?: number){
    if(id != undefined){
      this.skillsService.deleteSkills(id).subscribe(
        data => {
          alert("¡Eliminado! :D")
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
