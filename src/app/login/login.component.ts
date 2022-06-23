import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
