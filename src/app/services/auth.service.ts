import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserModel } from '../model/UserModel';
import { UserLogin } from '../model/UserLogin';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class AuthService{

  private url = 'http://localhost:8080/usuarios'
  constructor(private httpClient : HttpClient){

  }
  cadastrar(userModel: UserModel) :Observable<UserModel>{
    console.log(this.httpClient.post<UserModel>(this.url + '/cadastrar', userModel))
    return this.httpClient.post<UserModel>(this.url + '/cadastrar', userModel);
  }

  entrar(userLogin: UserLogin):Observable<UserLogin>{
    console.log(this.httpClient.post<UserLogin>(this.url+'/logar',userLogin));
    return this.httpClient.post<UserLogin>(this.url+'/logar',userLogin);
  }


  logado(): boolean{
    console.log(environment.token!='');
    console.log("service is logado"+environment.token);
    return environment.token!='';
  }
}
