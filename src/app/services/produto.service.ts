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
  buscarProdutosByCategoria(categoria:string): Observable<ProdutoModel[]>{
    return this.httpClient.get<ProdutoModel[]>(this.url+'/categoria/'+categoria);
  }
  buscarProdutosByNome(nome:string):Observable<ProdutoModel[]>{
    return this.httpClient.get<ProdutoModel[]>(this.url+'/nome/'+nome);
  }
  buscarProdutosByMarca(marca:string):Observable<ProdutoModel[]>{

    return this.httpClient.get<ProdutoModel[]>(this.url+'/marca/'+marca);
  }
  criarNovoProduto(produto: ProdutoModel):Observable<any>{
    return this.httpClient.post<ProdutoModel>(this.url,produto);
  }

  buscarProdutoById(id:number):Observable<ProdutoModel>{
    return this.httpClient.get<ProdutoModel>(this.url+'/'+id);
  }

  putProduto(produto:ProdutoModel):Observable<ProdutoModel>{
    return this.httpClient.put<ProdutoModel>(this.url, produto)

  }
  deleteProduto(id: number){
    return this.httpClient.delete<ProdutoModel>(this.url + "/" +id)
}


}
