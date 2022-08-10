import { EditExperienciaComponent } from './component/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './component/experiencia/new-experiencia/new-experiencia.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'', component:PortfolioComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaexp', component:NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
