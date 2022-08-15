import { NuevapersonaComponent } from './component/acerca-de/nuevapersona/nuevapersona.component';
import { EditinfoComponent } from './component/acerca-de/editinfo.component';
import { EditproyectoComponent } from './component/proyecto/editproyecto.component';
import { NuevoproyectoComponent } from './component/proyecto/nuevoproyecto.component';
import { EditskillComponent } from './component/hys/editskill.component';
import { EditeducacionComponent } from './component/educacion/editeducacion.component';
import { NeweducacionComponent } from './component/educacion/neweducacion.component';
import { EditExperienciaComponent } from './component/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './component/experiencia/new-experiencia/new-experiencia.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { LoginComponent } from './component/login/login.component';
import { NuevaskillComponent } from './component/hys/nuevaskill.component';

const routes: Routes = [
  {path:'', component:PortfolioComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaexp', component:NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NeweducacionComponent},
  {path:'editedu/:id', component: EditeducacionComponent},
  {path:'nuevaskill', component:NuevaskillComponent},
  {path:'editskill/:id', component:EditskillComponent},
  {path:'nuevoproyecto', component:NuevoproyectoComponent},
  {path:'editproyecto/:id', component: EditproyectoComponent},
  {path:'editinfo/:id', component: EditinfoComponent},
  {path:'nuevapersona', component: NuevapersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
