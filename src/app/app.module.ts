import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginaEntradaComponent } from './components/pagina-entrada/pagina-entrada.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ListadoTecnologiasComponent } from './components/listado-tecnologias/listado-tecnologias.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EducacionService } from './servicios/educacion.service';
import { InterceptorService } from './servicios/interceptor.service';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { defineLordIconElement } from 'lord-icon-element';
import lottie from 'lottie-web';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginaEntradaComponent,
    PresentacionComponent,
    ListadoTecnologiasComponent,
    FooterComponent,
    LoginComponent,
    InformacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    EducacionComponent,
    ProyectosComponent,
    TecnologiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EducacionService,{
    provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]// esto es para que funcionen los iconos animados
})
export class AppModule {
  constructor(){
    defineLordIconElement(lottie.loadAnimation)
  }
 }
