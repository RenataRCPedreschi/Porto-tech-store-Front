import { Router } from '@angular/router';
import { environment } from './../environments/environment';
import { AuthService } from '../services/auth.service';
import { UserModel } from '../model/UserModel';
import { ViaCEPService } from '../services/viacep.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  newUser: UserModel = new UserModel();

  constructor(private viacepService: ViaCEPService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  isCamposNotNull() {
    return this.newUser.username != '' && this.newUser.password != '' && this.newUser.nome != '' && this.newUser.cpf != '' &&
      this.newUser.celular != '' && this.newUser.cep != '' && this.newUser.endereco != '' && this.newUser.numero &&
      this.newUser.bairro != '' && this.newUser.cidade != '' && this.newUser.estado != '';
  }


  buscarEndereco(cep: any) {
    this.viacepService.buscarCEP(cep.value).subscribe((resposta) => {
      this.prencherEndereco(resposta);
    })
  }

  prencherEndereco(enderecoModel: any) {
    this.newUser.endereco = enderecoModel.logradouro;
    this.newUser.bairro = enderecoModel.bairro;
    this.newUser.cidade = enderecoModel.localidade;
    this.newUser.estado = enderecoModel.uf;
  }

  cadastrarPessoa() {
    if (this.isCamposNotNull()) {
      this.newUser.isAdmin = false;
      this.auth.cadastrar(this.newUser).subscribe(resp => {
        console.log("resposta abaixo")
        console.log(resp);

        if (resp == null) {
          Swal.fire({
            icon: 'error',
            title: 'Usuário já cadastrado',
            text: 'Por favor, faça seu login!',
          })
        } else {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cadastrado com sucesso!',
            text: 'Obrigada por comprar na PortoTechStore',
            showConfirmButton: false,
            timer: 1500

          });
          this.router.navigate(['/login']);
        }

      }, erro => { console.log("erro:" + erro) });
    }

  }

  isLogado(): boolean {
    return environment.token != '';
  }

  verSenha() {
    const inputSenha = document.querySelector('#inputSenha') as HTMLInputElement;
    console.log(inputSenha);
    if (inputSenha.type === "password") {
      inputSenha.type = "text";
    } else {
      inputSenha.type = "password";
    }
  }
}
