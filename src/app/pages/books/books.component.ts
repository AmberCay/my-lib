import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { elementAt } from 'rxjs';
import { Answer } from 'src/app/modules/answer';
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


  constructor(public BooksService: BooksService, private toastr: ToastrService, public apiService: BooksService) {
    this.searchedBook = null;
    this.apiService.getAll().subscribe((answer:Answer) => {
      this.books = answer.data;
      // console.log(answer);
    })
  }

  public searchBook(search:string): void {
    if (search.length != 0) {
      this.apiService.getOne(Number(search)).subscribe((ans:Answer) => {
        if (ans.error) {
          this.toastr.error('Book id searched does not exist');
        }
        else {
          console.log(ans.data);
          
          this.books = ans.data
          // let newbook: Book = ans.data[0]
          // console.log(newbook);
          // console.log(typeof(newbook));
        }
      })
    }
    else {
      this.toastr.info('No book id searched')
    }
  }

  eliminate(book_id: number) {
    this.BooksService.delete(book_id).subscribe((ans:Answer) => {
      if (ans.error) {
        this.toastr.error("Book was not deleted")
      }
      else {
        this.books = ans.data
      }
    })
  }
}
