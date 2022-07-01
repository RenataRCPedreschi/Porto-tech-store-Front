import { Router } from '@angular/router';
import { environment } from './../environments/environment';
import { AuthService } from '../services/auth.service';
import { UserModel } from '../model/UserModel';
import { ViaCEPService } from '../services/viacep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  newUser : UserModel = new UserModel();

  constructor(private viacepService : ViaCEPService , private auth: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  isCamposNotNull(){
    return this.newUser.username!='' &&this.newUser.password !=''&& this.newUser.nome !='' && this.newUser.cpf != '' &&
    this.newUser.celular != '' && this.newUser.cep != '' && this.newUser.endereco !='' && this.newUser.numero &&
    this.newUser.bairro!= '' && this.newUser.cidade != '' && this.newUser.estado!='';
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
    if(this.isCamposNotNull()){
      this.newUser.isAdmin=false;
      console.log(this.newUser);
      this.auth.cadastrar(this.newUser).subscribe(resp=>{
        console.log(resp);
        this.router.navigate(['/login']);
      });

    }else{
      console.log('preencha todos os cmpos');
    }

  }

  isLogado():boolean{
    return environment.token !='';
  }

}
