import { environment } from './../environments/environment';
import { ProdutoService } from './../services/produto.service';

import { Component, OnInit } from '@angular/core';
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
  constructor(private router: Router,private produtoService: ProdutoService) { }

  ngOnInit(): void {

    this.produtoService.buscarProdutos().subscribe((lista:ProdutoModel[])=>{
      this.listaProdutos = lista;
      console.log(this.listaProdutos);
    });


  }
  adicionarCarrinho(produto : ProdutoModel){
    carrinho.push(produto);
    console.log(carrinho);
  }
}
