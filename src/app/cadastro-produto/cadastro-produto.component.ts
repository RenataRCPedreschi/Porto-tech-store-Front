import { ProdutoService } from './../services/produto.service';
import { ProdutoModel } from './../model/ProdutoModel';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel();

  constructor(private produtoService: ProdutoService,private router: Router) { }

  ngOnInit(): void {
  }
  addProdutosBancoDados() {
    this.produtoService.criarNovoProduto(this.produto).subscribe(resp=>{
      console.log("resposta"+resp);
      this.router.navigate(['/gerenciadorprodutos']);
    });
  }

  isAdmin(){
    return environment.isAdmin ==true ;
  }

}
