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
  valideDate: boolean = true;

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
      if (this.valideDate){
        this.librairyBooksService.putBookOfLibrairy(this.book, this.idLibrairy).subscribe(response => console.log(response.data));
        alert("modification réussi");
      }else {
        alert("date non valide");
      }
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

  parseDate($event) {
    try {
      let datetoparse =  $event.target.value.split('/');
      datetoparse = new Date(parseInt(datetoparse[2]), (parseInt(datetoparse[1]) - 1), (parseInt(datetoparse[0])));
      this.book.releaseDate = datetoparse.toISOString();
    }catch (e) {
      this.valideDate = false;
    }
  }

  emptyorblank(s) {
    return (0 === s.length) || (s.trim().length === 0);
  }
}
