import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ProdutoModel } from '../model/ProdutoModel';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService{
  private url=  'http://localhost:8080/produtos';
  //private listProduto: ProdutoModel[]

  constructor(private httpClient : HttpClient){
    //this.listProduto = [];
  }


  buscarProdutos():Observable<ProdutoModel[]>{
    return this.httpClient.get<ProdutoModel[]>(this.url);
  }

  criarNovoProduto(produto: ProdutoModel):Observable<any>{
    console.log(this.httpClient.post<ProdutoModel>(this.url,produto));
    return this.httpClient.post<ProdutoModel>(this.url,produto);
  }
}
