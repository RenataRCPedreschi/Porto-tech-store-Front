import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ProdutoModel } from '../model/ProdutoModel';

@Injectable({
  providedIn: 'root'
})

export class produtoService{
  private url=  'http://localhost:8080/produtos';

  constructor(private httpClient : HttpClient){

  }


  criarNovoProduto(produto: ProdutoModel):Observable<any>{
    console.log(this.httpClient.post<ProdutoModel>(this.url,produto));
    return this.httpClient.post<ProdutoModel>(this.url,produto);
  }
}
