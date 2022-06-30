import { ItemCarrinho } from '../model/ItemCarrinhoModel';
import { ProdutoService } from './../services/produto.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProdutoModel } from '../model/ProdutoModel';
import { carrinho } from '../environments/carrinho';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  public listaProdutos: ProdutoModel[] = [];
  constructor(private router: Router, private produtoService: ProdutoService) { } //private cabecalho: CabecalhoComponent) { }

  

  ngOnInit(): void {

    this.produtoService.buscarProdutos().subscribe((lista: ProdutoModel[]) => {
      this.listaProdutos = lista;
    });
  }
  adicionarCarrinho(produto: ProdutoModel) {
    //Verificando se o produto já existe no carinho
    for (let item of carrinho) {
      console.log(produto);
      console.log(item.produto);
      if (produto.idProduto == item.produto.idProduto) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Produto Adicionado ao Carrinho',
          showConfirmButton: false,
          timer: 1500
        });
        item.qtde++;
        return;
      }
    }
    const itemCarrinho: ItemCarrinho = new ItemCarrinho();
    itemCarrinho.produto = produto;
    itemCarrinho.qtde = 1;
    carrinho.push(itemCarrinho);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Produto Adicionado ao Carrinho',
      showConfirmButton: false,
      timer: 1500
    });


    //this.cabecalho.ngOnInit();
  }
  exibirCarrossel(): Boolean {

    return true;
  }
}
