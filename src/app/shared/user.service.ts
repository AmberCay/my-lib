import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modules/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;
  public loggedIn : boolean;
  public user: User;

  constructor(private http: HttpClient) {
    this.loggedIn = false
  }

  public register(user: User) {
    this.url = "http://localhost:3000/register";
    return this.http.post(this.url, user);
  };

  public login(user: User) {
    this.url = "http://localhost:3000/login";
    return this.http.post(this.url, user);
  };
}
