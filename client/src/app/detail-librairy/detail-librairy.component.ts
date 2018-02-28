import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { LibrairyBooksService} from '../librairy-books.service';
import {LibrairiesService} from '../librairies.service';

@Component({
  selector: 'app-detail-librairy',
  templateUrl: './detail-librairy.component.html',
  styleUrls: ['./detail-librairy.component.css']
})
export class DetailLibrairyComponent implements OnInit {
  librairy: object;
  constructor(private http: Http, private librairyBooksService: LibrairyBooksService, private  librairiesService: LibrairiesService) { }

  ngOnInit() {
    this.librairiesService.getLibrairy(1).subscribe(response => {
      console.log(response);
      this.librairy = response;
    });
  }

}
