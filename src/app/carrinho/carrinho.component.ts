import { Router } from '@angular/router';
import { VendaModel } from './../model/VendaModel';
import { VendaService } from './../services/venda.service';
import { environment } from './../environments/environment';
import { ItemCarrinho } from './../model/ItemCarrinhoModel';
import { Component, OnInit } from '@angular/core';
import { carrinho } from '../environments/carrinho';
import { UserModel } from '../model/UserModel';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  public carrinhoLocal = carrinho;
  public total: number = 0;
  public endereco = environment.endereco;
  public metodoPagamento:string = '';
  constructor(private vendaService: VendaService,private router: Router) { }

  ngOnInit(): void {
    this.calcularSubtotal();
    this.calcularTotal();

  }

  calcularTotal() {
    let totalSubtotal: number = 0;
    for (let itemCarrinho of this.carrinhoLocal) {
      totalSubtotal += itemCarrinho.subtotal;
    }
    this.total = totalSubtotal;
  }
  calcularSubtotal() {
    for (let itemCarrinho of this.carrinhoLocal) {
      itemCarrinho.subtotal = itemCarrinho.qtde * itemCarrinho.produto.precoVendaProduto;
    }
  }

  aumentarQtde(itemCarrinho: ItemCarrinho) {
    itemCarrinho.qtde++;
    this.ngOnInit();
  }

  diminuirQtde(itemCarrinho: ItemCarrinho) {
    if (itemCarrinho.qtde > 1) {
      itemCarrinho.qtde--;
      this.ngOnInit();
    }
  }

  removerItemCarrinho(itemCarrinho: ItemCarrinho) {
    const index: number = this.carrinhoLocal.indexOf(itemCarrinho)
    if (index > -1) {
      this.carrinhoLocal.splice(index, 1);
      this.ngOnInit();
    }
  }
  receberPagamento(pagamento:string){
    console.log(pagamento);
    this.metodoPagamento = pagamento;
  }
  finalizarCompra() {
    let idCarrinho = 0;
    if(this.metodoPagamento=="" || this.metodoPagamento == undefined || this.metodoPagamento == null){
      const selecionepagto = document.querySelector(".selecionepagto")
      const p=document.createElement("p")
      p.textContent="Selecione o método de pagamento"
      selecionepagto?.appendChild(p)
      console.log(selecionepagto)
      return;
    }


    this.vendaService.ultimoIdCarrinho().subscribe((resp: VendaModel) => {
      if (resp != null) idCarrinho = resp.idCarrinho + 1;
      this.gerarVenda(idCarrinho);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra realizada com sucesso!',
        text:'Obrigada por comprar na PortoTechStore',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/meuspedidos']);

    });



  }

  gerarVenda(idCarrinho: number) {

    for (let item of this.carrinhoLocal) {
      let venda = new VendaModel();
      let userModel = new UserModel();
      userModel.id = environment.id;
      venda.produto = item.produto;
      venda.idCarrinho = idCarrinho;
      venda.qtdeProduto = item.qtde;
      venda.usuario = userModel;
      venda.formaPagamento = this.metodoPagamento;
      this.vendaService.criarVenda(venda).subscribe((resp: VendaModel) => {
        console.log(resp);
      });
    }
  }

  isLogado(){
    return environment.token != '';
  }
}
