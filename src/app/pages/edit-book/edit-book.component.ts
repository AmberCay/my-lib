import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Answer } from 'src/app/modules/answer';
import { Book } from 'src/app/modules/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  constructor(public BooksService: BooksService, private toastr: ToastrService ) {
  }

  public sendEdit(title:string, type:string, author:string, price:string, photo:string, id_book:string) {
    let newest = new Book(Number(id_book), 0, title, type, author, Number(price), photo)
    this.BooksService.edit(newest).subscribe((res: Answer) => {
      if (!res.error) {
        this.toastr.success(`Your book has been edited`);
      }
      else {
        this.toastr.error('Book unsuccessfully edited')
      }
    });
  }
}
