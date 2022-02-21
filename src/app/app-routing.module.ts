import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { VistaComponent } from './components/vista/vista.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'registrar', component:RegistrarComponent},
  { path: 'vista', component:VistaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
