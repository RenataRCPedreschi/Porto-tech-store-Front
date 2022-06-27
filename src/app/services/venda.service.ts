import { VendaModel } from './../model/VendaModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private url = 'http://localhost:8080/vendasitem'
  constructor(private httpClient: HttpClient) { }

  ultimoIdCarrinho(): Observable<VendaModel> {
    return this.httpClient.get<VendaModel>(this.url + '/ultimocarrinho');
  }

  criarVenda(venda: VendaModel): Observable<VendaModel> {
    return this.httpClient.post<VendaModel>(this.url, venda)
  }
}
