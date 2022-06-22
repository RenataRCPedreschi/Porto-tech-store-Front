import { AuthService } from './../services/auth.service';
import { UserModel } from './../model/UserModel';
import { ViaCEPService } from './../services/viacep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  newUser : UserModel = new UserModel();

  constructor(private viacepService : ViaCEPService , private auth: AuthService) { }

  ngOnInit(): void {

  }
  buscarEndereco(cep:any){
    this.viacepService.buscarCEP(cep.value).subscribe((resposta)=>{
      this.prencherEndereco(resposta);
    })
  }

  prencherEndereco(enderecoModel: any){
    this.newUser.endereco = enderecoModel.logradouro;
    this.newUser.bairro = enderecoModel.bairro;
    this.newUser.cidade = enderecoModel.localidade;
    this.newUser.estado = enderecoModel.uf;
  }

  cadastrarPessoa(){
    this.newUser.isAdmin=false;
    console.log(this.newUser);
    this.auth.cadastrar(this.newUser).subscribe(resp=>{
      console.log(resp);
    })
  }
}
