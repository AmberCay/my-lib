import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr/public_api';
import { Book } from '../modules/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  static getAll() {
    throw new Error('Method not implemented.');
  }

  private books: Book[]

  constructor(private toastrSvc: ToastrService) {
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
    let requestedBook: Book;
    requestedBook = this.books.find(book => book.id_book === id_book);
    return requestedBook;
  }

  public add(book:Book) {
    this.books.push(book)
    this.toastrSvc.success(`${book.title} was added!`, 'Get Lit app')
  }

  public edit(editedBook:Book):boolean {
    let index: number = this.books.findIndex(book => book.id_book === editedBook.id_book);
    this.books.splice(index,1, editedBook)
    // if (this.getOne(book.id_book).id_book != null) {
    //   requestedBook = this.getOne(book.id_book)
    //   doesBookExist = true;
    //   requestedBook.title = book.title;
    //   requestedBook.author = book.author;
    //   requestedBook.price = book.price;
    //   requestedBook.photo = book.photo;
    //   requestedBook.type = book.type;
    // }
    return index <= 0;
  }

  public delete(id_book:number):boolean {
    // let bookExisted: boolean = false;
    // for (let i = 0; i < this.books.length; i++) {
    //   if (this.books[i].id_book === id_book) {
    //     this.books.splice(i,1);
    //     bookExisted = true;
    //   }
    // }
    let index: number = this.books.findIndex(book => book.id_book === id_book);
    this.books.splice(index, 1)
    return index<= 0;
  }
}
