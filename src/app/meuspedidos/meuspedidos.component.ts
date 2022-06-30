import { VendaService } from './../services/venda.service';
import { Component, OnInit } from '@angular/core';
import { VendaModel } from '../model/VendaModel';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-meuspedidos',
  templateUrl: './meuspedidos.component.html',
  styleUrls: ['./meuspedidos.component.css']
})
export class MeuspedidosComponent implements OnInit {
  listaPedidos: VendaModel[] = [];
  constructor(private vendaService: VendaService) { }

  ngOnInit(): void {
    this.getPedidos(environment.id);


  }

  getPedidos(idUser:number){

    this.vendaService.getMeusPedidos(idUser).subscribe(resp=>{
      this.listaPedidos = resp;
      console.log(this.listaPedidos);
    })

  }

}
