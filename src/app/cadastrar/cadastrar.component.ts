import { ViaCEPService } from './../services/viacep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  cep:string = '';
  endereco:string = '';
  bairro:string = '';
  cidade:string = '';
  estado:string = '';

  constructor(private viacepService : ViaCEPService) { }

  ngOnInit(): void {

  }
  buscarEndereco(cep:any){
    this.viacepService.buscarCEP(cep.value).subscribe((resposta)=>{
      this.prencherEndereco(resposta);
    })
  }

  prencherEndereco(enderecoModel: any){
    this.endereco = enderecoModel.logradouro;
    this.bairro = enderecoModel.bairro;
    this.cidade = enderecoModel.localidade;
    this.estado = enderecoModel.uf;
  }
}
