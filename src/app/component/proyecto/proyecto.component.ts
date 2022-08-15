import { TokenService } from 'src/app/service/token.service';
import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos: any = [];
  isLogged: boolean = false;

  constructor(private proyectoService:ProyectoService, private tokenService: TokenService) { }

  getProjects(): void {
    this.proyectoService.getProyecto().subscribe((data) => {
      this.proyectos = data;
      console.log(this.proyectos);
    })
  }

  ngOnInit(): void {
    this.getProjects();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  deleteProyecto(id: number): void{
    this.proyectoService.deleteProyecto(id).subscribe(data => {
      alert('se ha eliminado correctamente :D')
      this.getProjects();
    })
  }

}
