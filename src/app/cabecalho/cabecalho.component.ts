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
  username = environment.username;
  constructor() { }
  ngOnInit(): void {
    this.tamanhoCarrinho = carrinho.length;
    console.log(this.tamanhoCarrinho);
    console.log(this.username);
  }

  isNotLogado(): boolean{

    return environment.token == '';
  }

  esconderHeaderRodape(){
    environment.exibirMenuRodape=false;

  }
  sair(){

  }
}
