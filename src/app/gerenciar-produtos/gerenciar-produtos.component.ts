import { ProdutoService } from './../services/produto.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoModel } from '../model/ProdutoModel';
import { environment } from '../environments/environment';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-gerenciar-produtos',
  templateUrl: './gerenciar-produtos.component.html',
  styleUrls: ['./gerenciar-produtos.component.css']
})
export class GerenciarProdutosComponent implements OnInit {

  dataSource!: MatTableDataSource<ProdutoModel>;
  listaProdutos:any;
  displayedColumn = ['urlFotoProduto','nomeProduto','precoVendaProduto','qtdeEstoqueProduto','categoriaProduto','marcaProduto','gerProduto']

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private router: Router, private produtoService: ProdutoService) {
    this.produtoService.buscarProdutos().subscribe((dataProdutos)=>{
      this.listaProdutos = dataProdutos;
      this.dataSource = new MatTableDataSource(this.listaProdutos);
      this.dataSource.sort = this.sort;
      this.paginator._intl.itemsPerPageLabel = 'Itens por página'
      this.dataSource.paginator = this.paginator;

    });
  }
  ngOnInit() {
  }
  chamarPagProduto() {
    this.router.navigate(['/cadastroproduto']);
  }

  deletarProduto(id:number|string){

    this.produtoService.deleteProduto(Number(id)).subscribe(resp=>{

      this.ngOnInit();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Produto excluído!',
        showConfirmButton: false,
        timer: 1500
      });

    });
  }


  isAdmin(){
    return environment.isAdmin == true ;
  }
  pesquisarProduto(e:Event){
    const filteredValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filteredValue.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

}
