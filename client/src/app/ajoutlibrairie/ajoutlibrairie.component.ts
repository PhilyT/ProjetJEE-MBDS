import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { LibrairiesService } from '../librairies.service';

@Component({
  selector: 'app-ajoutlibrairie',
  templateUrl: './ajoutlibrairie.component.html',
  styleUrls: ['./ajoutlibrairie.component.css']
})
export class AjoutlibrairieComponent implements OnInit {
  //id: number
  address: string
  name: string
  yearCreated: number
  library: object
  books: [any]
  constructor(private http: Http, private libraryService: LibrairiesService) {

  }

  ngOnInit() {
  }

  addLibrary() {
    this.library = { name: this.name, address: this.address, yearCreated: this.yearCreated };
    this.libraryService.addLibrary(this.library).subscribe(response => console.log(response));
  }

}
