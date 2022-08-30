
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LogoAPComponent } from './component/logo-ap/logo-ap.component';
import { SocialComponent } from './component/social/social.component';
import { BannerComponent } from './component/banner/banner.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './component/hys/hys.component';
import { ProyectoComponent } from './component/proyecto/proyecto.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './component/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './component/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './component/educacion/neweducacion.component';
import { EditeducacionComponent } from './component/educacion/editeducacion.component';
import { NuevaskillComponent } from './component/hys/nuevaskill.component';
import { EditskillComponent } from './component/hys/editskill.component';
import { EditproyectoComponent } from './component/proyecto/editproyecto.component';
import { NuevoproyectoComponent } from './component/proyecto/nuevoproyecto.component';
import { EditinfoComponent } from './component/acerca-de/editinfo.component';
import { NuevapersonaComponent } from './component/acerca-de/nuevapersona/nuevapersona.component';
import {NgxTypedJsModule} from 'ngx-typed-js';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    PortfolioComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NuevaskillComponent,
    EditskillComponent,
    EditproyectoComponent,
    NuevoproyectoComponent,
    EditinfoComponent,
    NuevapersonaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxTypedJsModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
