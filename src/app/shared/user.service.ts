import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modules/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:3000/";
  public loggedIn : boolean;
  public user: User;

  constructor(private http: HttpClient) {

    this.loggedIn = false;
    this.user= null
  }

  public register(new_user: User) {
    return this.http.post(this.url + "register", new_user);
  };

  public login(user: User) {
    this.loggedIn=true;
    console.log(this.loggedIn);
    
    
    return this.http.post(this.url + "login", user);
  };
}
