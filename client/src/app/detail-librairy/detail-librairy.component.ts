import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { LibrairyBooksService} from '../librairy-books.service';
import {LibrairiesService} from '../librairies.service';

@Component({
  selector: 'app-detail-librairy',
  templateUrl: './detail-librairy.component.html',
  styleUrls: ['./detail-librairy.component.css']
})
export class DetailLibrairyComponent implements OnInit {
  librairy: any;

  constructor(private route: ActivatedRoute,
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
}
