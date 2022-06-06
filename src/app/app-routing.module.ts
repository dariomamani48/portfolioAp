import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PaginaEntradaComponent } from './components/pagina-entrada/pagina-entrada.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'presentacion', component:PresentacionComponent, canActivate:[GuardGuard]},
  {path:'inicio', component:PaginaEntradaComponent},
  {path:'login',component: LoginComponent },
  {path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'**',component:PaginaEntradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
