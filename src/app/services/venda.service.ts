import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private url = 'http://localhost:8080/vendasitem'
  constructor(private httpClient: HttpClient) { }

  ultimoIdCarrinho(){
    this.httpClient.get(this.url+'/ultimocarrinho');
  }
}
