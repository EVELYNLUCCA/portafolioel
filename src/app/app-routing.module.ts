import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'portfolio', component: PortfolioComponent},  
  {path:'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
