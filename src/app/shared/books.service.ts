import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../modules/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // static getAll() {
  //   throw new Error('Method not implemented.');
  // }

  public books: Book[]

  private url = "http://localhost:3000/books"
  constructor(private http: HttpClient) {
    
  }

  public getAll() {
    return this.http.get(this.url)
  }

  public getOne(id_book:number) {
    let newUrl = `${this.url}?id${id_book}`
    return this.http.get(newUrl);
  }

  public add(book:Book) {
    return this.http.post(this.url, book)
  }

  public edit(editedBook:Book) {
    return this.http.put(this.url, editedBook);

  }

  public delete(id_book:number) {
    let delBook = this.books.find(book => book.id_book = id_book);
    return this.http.delete(this.url, id_book);
  }
}
