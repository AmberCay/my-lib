import { Component } from '@angular/core';
import { Book } from 'src/app/modules/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books:Book[]

  constructor() {
    this.books = [
      new Book(0, 0, 'Siren\'s of Titan', 'Soft cover', 'Kurt Vonnegut', 14, 'https://jonathanrosenbaum.net/wp-content/uploads/2011/02/the_sirens-of_titan.jpg'),
      new Book(1, 1, 'Candide, or Optimism', 'Soft cover', 'Voltaire', 14, 'https://cdn2.penguin.com.au/covers/original/9780140455106.jpg')
    ]
 
  }

  public addBook(title:string, type:string, author:string, price:string, photo:string, id_book:string) {
    let newest = new Book(Number(id_book), 0, title, type, author, Number(price), photo)
    this.books.push(newest)
  }

  eliminate(book_id:number) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id_book == book_id) {
        this.books.splice(i, 1)
      }
    }
    }
}
