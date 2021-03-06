import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { LibrairyBooksService} from '../librairy-books.service';
import {LibrairiesService} from '../librairies.service';

@Component({
  selector: 'app-detail-librairy',
  templateUrl: './detail-librairy.component.html',
  styleUrls: ['./detail-librairy.component.css']
})
export class DetailLibrairyComponent implements OnInit {
  librairy: any;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: Http,
              private librairyBooksService: LibrairyBooksService,
              private  librairiesService: LibrairiesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const idLibrairy = params['id'];
      this.librairiesService.getLibrairy(idLibrairy).subscribe(response => {
        this.librairy = response;
        this.librairyBooksService.getBooksOfLibrairy(idLibrairy).subscribe(response2 => {
          this.librairy.books = response2;
        });
      });
    });
  }
  deleteLibrairy() {
    this.librairiesService.deleteLibrary(this.librairy.id).subscribe(response => {
      alert("supression réussie !");
      this.router.navigate(['/']);
    });
  }
  deleteLivre(book) {
    console.log(book);
    this.librairyBooksService.deleteLivreFromLibrary(book).subscribe(response => {
      alert("supression du livre reussie!");
      this.librairyBooksService.getBooksOfLibrairy(this.librairy.id).subscribe(response2 => {
        this.librairy.books = response2;
      })
    });
    //this.router.navigate(['/detailBibliotheque/' + this.librairy.id]);
  }
}
