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
      if(this.newUser.complemento=="null")this.newUser.complemento="";
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
            text: 'Obrigada pelo cadastro na PortoTechStore',
            showConfirmButton: false,
            timer: 1500

          });
          this.router.navigate(['/login']);
        }

      }, erro => { console.log("erro:" + erro) });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Há campos obrigatórios vazios',
        text: 'Por favor, preencha todos os campos obrigatórios',
      })
      this.camposVazios();
    }

  }

  isLogado(): boolean {
    return environment.token != '';
  }
  camposVazios(){
    //const inputs = document.querySelectorAll('input'); Da para fazer a mesma coisa com loop


    const $inputEmail = document.querySelector('#inputEmail');
    const $inputNome = document.querySelector('#inputNome');
    const $inputSenha = document.querySelector('#inputSenha');
    const $inputCPF = document.querySelector('#inputCPF');
    const $inputCelular = document.querySelector('#inputCelular');
    const $inputCEP = document.querySelector('#inputCEP');
    const $inputEndereco= document.querySelector('#inputEndereco');
    const $inputNumero= document.querySelector('#inputNumero');
    const $inputBairro= document.querySelector('#inputBairro');
    const $inputCidade= document.querySelector('#inputCidade');
    const $selectEstado= document.querySelector('#inputEstado');

    const AllInputArray = [$inputEmail,$inputNome,$inputSenha,$inputCPF,$inputCelular,
      $inputCEP,$inputEndereco,$inputNumero,$inputBairro,$inputCidade];

    for(let input of AllInputArray){
      if((input as HTMLInputElement).value == ''){
        input?.classList.add('campoInvalido')
      } else{
        input?.classList.remove('campoInvalido');
      }
    }

    if(($selectEstado as HTMLSelectElement).selectedIndex == -1){
      $selectEstado?.classList.add('campoInvalido')
    }else{
      $selectEstado?.classList.remove('campoInvalido')
    }

  }
  verificaVazioBlur(input:any){
    if((input as HTMLInputElement).value != ''){
      (input as HTMLInputElement).classList.remove('campoInvalido');
    }

  }
  verificaVazioBlurSelected(input:any){
    if((input as HTMLSelectElement).selectedIndex != -1){
      (input as HTMLSelectElement).classList.remove('campoInvalido');
    }
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
