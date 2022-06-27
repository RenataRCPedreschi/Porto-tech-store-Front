import { ItemCarrinho } from './../model/ItemCarrinhoModel';
import { Component, OnInit } from '@angular/core';
import { carrinho } from '../environments/carrinho';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  public carrinhoLocal = carrinho;
  public total: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.calcularSubtotal();
    this.calcularTotal();

  }

  calcularTotal() {
    let totalSubtotal:number =0;
    for(let itemCarrinho of this.carrinhoLocal){
      totalSubtotal+= itemCarrinho.subtotal;
    }
    this.total= totalSubtotal;
  }
  calcularSubtotal() {
    for(let itemCarrinho of this.carrinhoLocal){
      itemCarrinho.subtotal = itemCarrinho.qtde * itemCarrinho.produto.precoVendaProduto;
    }
  }

  aumentarQtde(itemCarrinho: ItemCarrinho) {
    itemCarrinho.qtde++;
    this.ngOnInit();
  }

  diminuirQtde(itemCarrinho: ItemCarrinho) {
    if(itemCarrinho.qtde > 1){
      itemCarrinho.qtde--;
      this.ngOnInit();
    }
  }

  removerItemCarrinho(itemCarrinho:ItemCarrinho){
    const index:number = this.carrinhoLocal.indexOf(itemCarrinho)
    if(index > -1){
      this.carrinhoLocal.splice(index,1);
      this.ngOnInit();
    }
  }

  finalizarCompra(){

  }
}
