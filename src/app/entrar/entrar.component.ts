
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();
  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit(): void {
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp:UserLogin)=>{
        this.userLogin = resp;
        environment.id = this.userLogin.id;
        environment.username = this.userLogin.username;
        environment.token = this.userLogin.token;
        this.router.navigate(['/inicio']);
        console.log(environment);
    });
  }
}
