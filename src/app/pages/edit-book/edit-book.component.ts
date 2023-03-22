import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Answer } from 'src/app/modules/answer';
import { Book } from 'src/app/modules/book';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  constructor(public BooksService: BooksService, private toastr: ToastrService, public userApiService: UserService) {
  }

  public sendEdit(title:string, type:string, author:string, price:string, photo:string, id_book:string) {
    // how to only add if their length != 0
    let newest = new Book(Number(id_book), this.userApiService.user.id_user,
    title=="" ? null: title , type=="" ? null: type, author=="" ? null: author, price=="" ? null: Number(price), photo=="" ? null: photo)
    console.log(newest);
    
    this.BooksService.edit(newest).subscribe((res: Answer) => {
      if (!res.error || res.message === "1") {
        this.toastr.success(`Your book has been edited`);
        title = null;
        type = null;
        author = null;
        price = null;
        photo = null;
        id_book = null;
      }
      else {
        this.toastr.error('Book unsuccessfully edited')
      }
    });
  }
}
