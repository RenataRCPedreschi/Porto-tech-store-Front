import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserModel } from '../model/UserModel';

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
}
