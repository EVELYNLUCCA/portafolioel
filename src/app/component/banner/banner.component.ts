import { PersonaService } from 'src/app/service/persona.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  info: any = {};

  constructor(private personaservice: PersonaService) { }

  cargarInfo(): void{
    this.personaservice.getPersona().subscribe(data => {
      this.info = data[data.length - 1];
      console.log(this.info);
    }, err => {
      console.log(err);
      alert('salio mal')
    })
  }

  ngOnInit(): void {
    this.cargarInfo();
  }




}
