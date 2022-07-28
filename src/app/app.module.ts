import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscaCategoriaComponent } from './busca-categoria/busca.component';
import { BuscaMarcaComponent } from './busca-marca/busca-marca.component';
import { BuscaNomeComponent } from './busca-nome/busca-nome.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MeuspedidosComponent } from './meuspedidos/meuspedidos.component';
import { ProdutoComponent } from './produto/produto.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';

registerLocaleData(ptBr)







@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CadastrarUsuarioComponent,
    InicioComponent,
    CabecalhoComponent,
    CadastroProdutoComponent,
    CarrinhoComponent,
    ProdutoComponent,
    LoginComponent,
    GerenciarProdutosComponent,
    EditarProdutoComponent,
    SobreComponent,
    FaleConoscoComponent,
    BuscaCategoriaComponent,
    BuscaNomeComponent,
    BuscaMarcaComponent,
    EditarUsuarioComponent,
    MeuspedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule
  ],

  providers: [


  {provide:DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'},
    {provide: LOCALE_ID, useValue: 'pt' }
  ],
bootstrap: [AppComponent]
})
export class AppModule { }




