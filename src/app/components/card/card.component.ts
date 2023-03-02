import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Book } from 'src/app/modules/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  @Output() cardEvent = new EventEmitter<number>();

  @Input() book!: Book;
  @Input() even: boolean;
  
  constructor() {}
  
  
  public isSeen() {
    let ref = this.book.id_book
    this.cardEvent.emit(ref)
}
}
