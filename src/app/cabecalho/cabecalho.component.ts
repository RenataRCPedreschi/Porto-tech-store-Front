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
  buscarNome:string = '';

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
    environment.endereco='';
    environment.id=0;
    environment.isAdmin=false;
    environment.username='';
    environment.token=''
  }

  isAdmin():Boolean{

    return environment.isAdmin;
  }
}
