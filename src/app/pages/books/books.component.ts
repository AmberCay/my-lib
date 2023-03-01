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
      new Book('Siren\'s of Titan', 'Soft cover', 'Kurt Vonnegut', 14, 'https://jonathanrosenbaum.net/wp-content/uploads/2011/02/the_sirens-of_titan.jpg'),
      new Book('Candide, or Optimism', 'Soft cover', 'Voltaire', 14, 'https://cdn2.penguin.com.au/covers/original/9780140455106.jpg')
    ]
  }

  public addBook(title:string, type:string, author:string, price:string, photo:string) {
    this.books.push(new Book(title, type, author, Number(price), photo))
  }
  
  public isEven(i:number):boolean {
    let bool: boolean = true
    if (i % 2 !== 0) {
      bool = false
    }
    return bool
  }
}
