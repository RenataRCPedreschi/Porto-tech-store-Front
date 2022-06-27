import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [{
  path: '', redirectTo: 'inicio', pathMatch: 'full'
},
{ path: 'inicio', component: InicioComponent },
{path: 'cadastrarusuario',component: CadastrarUsuarioComponent},
{path: 'carrinho',component: CarrinhoComponent},
{path: 'login',component: LoginComponent},
{path:'cadastroproduto',component:CadastroProdutoComponent},
{path:'gerenciadorprodutos', component:GerenciarProdutosComponent},
{path:'produto-editar/:id',component:EditarProdutoComponent},
<<<<<<< Updated upstream
{path:'produto/:id',component: ProdutoComponent}
=======
{path:'produto',component:ProdutoComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
