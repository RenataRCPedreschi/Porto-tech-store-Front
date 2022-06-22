import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { EntrarComponent } from './entrar/entrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', redirectTo: 'inicio', pathMatch: 'full'
},
{ path: 'inicio', component: InicioComponent },
{path: 'cadastrar',component: CadastrarComponent},
{path: 'entrar',component: EntrarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
