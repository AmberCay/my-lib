import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Answer } from 'src/app/modules/answer';
import { Book } from 'src/app/modules/book';
import { BooksService } from 'src/app/shared/books.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(public BooksService: BooksService, private toastr: ToastrService, private apiService: BooksService) { }

  public addBook(title: string, type: string, author: string, price: string, photo: string, id_book: string) {
    let newest = new Book(Number(id_book), 0, title, type, author, Number(price), photo)

    this.apiService.add(newest).subscribe((res: Answer) => {
      if (!res.error) {
        this.toastr.success(`New Book added! It's id is ${newest.id_book}`);
        title = null;
      }
      else {
        this.toastr.error('The Book already exists')
      }
    })


  }
}
