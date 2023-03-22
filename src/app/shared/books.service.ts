import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../modules/book';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // static getAll() {
  //   throw new Error('Method not implemented.');
  // }

  public books: Book[]
  public user: string;

  private url = "http://localhost:3000/books"
  constructor(private http: HttpClient, public userApiService: UserService) {
  }

  public getAll() {
    this.user = this.userApiService.user.f_name
    return this.http.get(`${this.url}?id_user=${this.user}`)
  }

  public getOne(id_book:number) {
    this.user = this.userApiService.user.f_name
    let newUrl = `${this.url}?id_user=${this.user}&id_book=${id_book}`
    return this.http.get(newUrl);
  }

  public add(book:Book) {
    return this.http.post(this.url, book)
  }

  public edit(editedBook:Book) {
    return this.http.put(this.url, editedBook);
  }

  public delete(id_book:number) {
    let deletedBook = {headers: null, body:{id_book:id_book}};
    return this.http.delete(this.url, deletedBook);
  }
}
