import { environment } from './../environments/environment';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { carrinho } from '../environments/carrinho';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  tamanhoCarrinho = carrinho.length;
  constructor() { }
  ngOnInit(): void {
    console.log(carrinho.length)
    console.log(carrinho)
  }

  isNotLogado(): boolean{

    return environment.token == '';
  }

  esconderHeaderRodape(){
    environment.exibirMenuRodape=false;
  }
}
