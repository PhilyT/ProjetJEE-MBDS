import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LibrairyBooksService} from '../librairy-books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book: any;
  idLibrairy: any;

  constructor(private route: ActivatedRoute, private librairyBooksService: LibrairyBooksService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idLibrairy = params['idLibrairy'];
      const idBook = params['idBook'];
      this.librairyBooksService.getBookOfLibrairy(this.idLibrairy, idBook).subscribe(response => {
        this.book = response;
        console.log(response.releaseDate);
        this.book.releaseDate =  new Date(response.releaseDate);
      });
    });
  }

  editBook(form) {

  }

}
