import { Injectable } from '@angular/core';
import { Book } from '../modules/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  static getAll() {
    throw new Error('Method not implemented.');
  }

  private books: Book[]

  constructor() {
    this.books = [
      new Book(0, 0, 'Siren\'s of Titan', 'Soft cover', 'Kurt Vonnegut', 14, 'https://jonathanrosenbaum.net/wp-content/uploads/2011/02/the_sirens-of_titan.jpg'),
      new Book(1, 1, 'Candide, or Optimism', 'Soft cover', 'Voltaire', 14, 'https://cdn2.penguin.com.au/covers/original/9780140455106.jpg')
    ]
  }

  public getAll():Book[] {
    let bookList: Book[] = this.books
    return bookList;
  }

  public getOne(id_book:number): Book {
    // let requestedBook: Book = this.books.filter(book => book.id_book === id_book);
    let requestedBook: Book;
    for (let book of this.books) {
      if (book.id_book === id_book) {
        requestedBook = book;
      }
    }
    return requestedBook;
  }

  public add(book:Book) {
    this.books.push(book)
  }

  public edit(book:Book) {

  }

  public delete(id_book:number):boolean {
    let bookExisted: boolean = false;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id_book === id_book) {
        this.books.splice(i,1);
        bookExisted = true;
      }
    }
    return bookExisted
  }
}
