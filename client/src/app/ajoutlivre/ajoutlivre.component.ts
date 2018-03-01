import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LibrairyBooksService } from '../librairy-books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajoutlivre',
  templateUrl: './ajoutlivre.component.html',
  styleUrls: ['./ajoutlivre.component.css']
})
export class AjoutlivreComponent implements OnInit {
  nom: string;
  releaseDate: string;
  isbn: string;
  author: string;
  book: any;
  idLibrairy: any;
  constructor(private route: ActivatedRoute, private http: Http, private libraryBooksService: LibrairyBooksService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idLibrairy = params['idLibrairy'];
    });
  }

  ajoutBookToLibrary() {
    this.book = { name: this.nom, releaseDate: this.releaseDate, isbn: this.isbn, author: this.author };
    this.libraryBooksService.addBookToLibrary(this.idLibrairy, this.book).subscribe(response => console.log(response));
  }
}
