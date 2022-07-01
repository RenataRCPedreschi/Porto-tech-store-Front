import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent implements OnInit {
nome:string=""
email:string=""
mensagem:string=""

  constructor() { }

  ngOnInit(): void {

  }
mensagemEnviadaComSucesso(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Mensagem enviada com sucesso!',
    showConfirmButton: false,
    timer: 1500
  })
  this.limparCampo()
}
limparCampo(){
  this.nome=""
  this.email=""
  this.mensagem=""
}
}
