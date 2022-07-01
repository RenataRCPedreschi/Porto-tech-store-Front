import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from '../environments/environment';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();
  visible: boolean = true;
  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    /* if(localStorage.getItem("jwt") != null){
      auth.entrar(userLogin).subscribe((resp: UserLogin) => {

        userLogin = resp;
        console.log(userLogin);
        environment.id = userLogin.id;
        environment.nome = userLogin.nome;
        environment.username = userLogin.username;
        environment.token = userLogin.token;
        environment.isAdmin = userLogin.isAdmin;
        environment.endereco += userLogin.endereco + ',';
        environment.endereco += userLogin.numero + ' ';
        environment.endereco += userLogin.complemento + ' ';
        environment.endereco += userLogin.bairro + ' - ';
        environment.endereco += userLogin.cidade + ', ';
        environment.endereco += userLogin.estado + ' - ';
        environment.endereco += userLogin.cep;

      });



    } */

  }

  isLogado(): boolean {
    return environment.token != '';
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp; //Resposta do backend -> Associando ao userLogin
      this.preencherEnvironment(this.userLogin); //->Preenchendo o environment
      if (this.userLogin.isAdmin == true) {
        this.router.navigate(['/gerenciadorprodutos']);
      } else {

        this.router.navigate(['/inicio']);
      }

      console.log(environment);
    });
    if (this.isCamposNotNull()) {

      this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
        this.userLogin = resp;

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logado com sucesso!!!',
          showConfirmButton: false,
          timer: 1500
        });

        if (this.userLogin.isAdmin == true) {
          this.router.navigate(['/gerenciadorprodutos']);
        } else {

          this.router.navigate(['/inicio']);
        }
      }, (erro) => {
        const p_texto_validacao = document.querySelector('#text_validacao');
        if (p_texto_validacao != undefined || p_texto_validacao != null) {
          p_texto_validacao.parentNode?.removeChild(p_texto_validacao);
        }
        const validacao = document.querySelector('.validacao');
        const p = document.createElement('p');
        p.setAttribute('id', 'text_validacao');
        p.textContent = 'Usuário ou senha inválidos tente novamente'
        validacao?.appendChild(p);

      });
    }



  }

  preencherEnvironment(userLogin: UserLogin) {
    environment.id = userLogin.id;
    environment.nome = userLogin.nome;
    environment.username = userLogin.username;
    environment.token = userLogin.token;
    environment.isAdmin = userLogin.isAdmin;
    environment.endereco += userLogin.endereco + ',';
    environment.endereco += userLogin.numero + ' ';
    environment.endereco += userLogin.complemento + ' ';
    environment.endereco += userLogin.bairro + ' - ';
    environment.endereco += userLogin.cidade + ', ';
    environment.endereco += userLogin.estado + ' - ';
    environment.endereco += userLogin.cep;
  }

  isCamposNotNull() {
    if ((this.userLogin.username == '' || this.userLogin.username == undefined) || (this.userLogin.password == '' || this.userLogin.password == undefined)) {
      const p_texto_validacao = document.querySelector('#text_validacao');
      if (p_texto_validacao != undefined || p_texto_validacao != null) {
        p_texto_validacao.parentNode?.removeChild(p_texto_validacao);
      }
      const validacao = document.querySelector('.validacao');
      const p = document.createElement('p');
      p.setAttribute('id', 'text_validacao');
      p.textContent = 'Campos vazios, preencha todos os campos';
      validacao?.appendChild(p);
      return false;
    }
    return true;
  }

  verSenha(){
    const inputSenha = document.querySelector('#inputSenha') as HTMLInputElement;
    console.log(inputSenha);
    if(inputSenha.type === "password"){
      inputSenha.type = "text";
    }else{
      inputSenha.type ="password";
    }
  }
}
