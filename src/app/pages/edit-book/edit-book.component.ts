import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
    this.BooksService.edit(newest);
    if (this.BooksService.edit(newest) == true) {
      this.toastr.success(`Book ${newest.id_book} has been edited!`)
    }
    else {
      this.toastr.error('that book does not exist')
    }
  }
}
