import { CabecalhoComponent } from './../cabecalho/cabecalho.component';
import { ItemCarrinho } from '../model/ItemCarrinhoModel';
import { ProdutoService } from './../services/produto.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoModel } from '../model/ProdutoModel';
import { carrinho } from '../environments/carrinho';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public listaProdutos:ProdutoModel[] = [];
  constructor(private router: Router,private produtoService: ProdutoService){} //private cabecalho: CabecalhoComponent) { }

  ngOnInit(): void {

    this.produtoService.buscarProdutos().subscribe((lista:ProdutoModel[])=>{
      this.listaProdutos = lista;
      console.log(this.listaProdutos);
    });


  }
  adicionarCarrinho(produto : ProdutoModel){
    const itemCarrinho:ItemCarrinho = new ItemCarrinho();
    itemCarrinho.produto = produto;
    itemCarrinho.qtde=1;
    carrinho.push(itemCarrinho);

    //this.cabecalho.ngOnInit();
}
}
