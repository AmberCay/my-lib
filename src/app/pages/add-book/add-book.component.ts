import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Answer } from 'src/app/modules/answer';
import { Book } from 'src/app/modules/book';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(public BooksService: BooksService, private toastr: ToastrService, private apiService: BooksService, public userApiService: UserService) { }

  public addBook(title: string, type: string, author: string, price: string, photo: string) {
    let newest = new Book(null, this.userApiService.user.id_user, title, type, author, Number(price), photo)

    this.apiService.add(newest).subscribe((res: Answer) => {
      console.log(res);
      
      if (res.message != "0") {
        this.toastr.success(`New Book added! It's id is ${newest.id_book}`);
        title = null;
      }
      else {
        this.toastr.error('The Book already exists')
      }
    })


  }
}
