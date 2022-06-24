import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [{
  path: '', redirectTo: 'inicio', pathMatch: 'full'
},
{ path: 'inicio', component: InicioComponent },
{path: 'cadastrarusuario',component: CadastrarUsuarioComponent},
{path: 'carrinho',component: CarrinhoComponent},
{path: 'login',component: LoginComponent},
{path:'cadastroproduto',component:CadastroProdutoComponent},
{path:'gerenciadorprodutos', component:GerenciarProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
