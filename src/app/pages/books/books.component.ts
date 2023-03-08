import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/modules/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[];
  searchedBook: Book;


  constructor(public BooksService: BooksService, private toastr: ToastrService) {
    this.books = this.BooksService.getAll()
    this.searchedBook = null;
  }

  public searchBook(search:string): void {
    if (search.length != 0) {
      if (this.books.findIndex(book => book.id_book == Number(search)) != -1) {
        let book_id: number = Number(search);
      this.books = [this.BooksService.getOne(book_id)]
      }
      else {
        this.books = this.BooksService.getAll();
        this.toastr.error(`A Book with ${search} as an id does not exist yet`)
      }
    }
    else {
      this.books = this.BooksService.getAll()
      this.toastr.info('No book id searched')
    }
  }

  eliminate(book_id: number) {
    this.BooksService.delete(book_id)
  }
}
