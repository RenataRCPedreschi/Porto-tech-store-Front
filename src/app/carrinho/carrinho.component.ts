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
    this.calcularTotal();
  }
  calcularTotal(){
    for(let produto of this.carrinhoLocal){
      this.total+= produto.precoVendaProduto;
    }
  }
}
