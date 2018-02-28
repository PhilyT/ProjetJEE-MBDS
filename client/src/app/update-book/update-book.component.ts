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
      });
    });
  }

  editBook() {
    if (this.controlInputs()) {
      this.librairyBooksService.putBookOfLibrairy(this.book, this.idLibrairy).subscribe(response => console.log(response.data));
      alert("modification réussi");
    }
    else {
      alert("les champs n'accèptent pas de valeurs null");
    }
  }

  controlInputs() {
    return !this.emptyorblank(this.book.name)
      && !this.emptyorblank(this.book.author)
      && !this.emptyorblank(this.book.releaseDate)
      && !this.emptyorblank(this.book.isbn);
  }

  emptyorblank(s) {
    return (0 === s.length) || (s.trim().length === 0);
  }
}
