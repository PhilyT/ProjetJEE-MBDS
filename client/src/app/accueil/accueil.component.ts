import { Component, OnInit } from '@angular/core';
import { LibrairiesService } from '../librairies.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],

})
export class AccueilComponent implements OnInit {

  constructor(private http: Http, private serviceLibraries: LibrairiesService) { }
  public imagesUrl;
  librairies=new Array();


  ngOnInit() {
    this.imagesUrl = [
      './assets/images/bu1.jpg',
      './assets/images/bu2.jpg',
      './assets/images/bu3.jpg',
      './assets/images/bu4.jpg',
    ];
    this. serviceLibraries.getLibraries().subscribe(response => {
      console.log("bbbbb");

     this.librairies=response;
     console.log(this.librairies);

    });
  }
  deleteLibrairy(id) {
    this.serviceLibraries.deleteLibrary(id).subscribe(response => {
      alert("supression réussie !");
      this. serviceLibraries.getLibraries().subscribe(response2 => {


        this.librairies = response2;

      });
    });
  }
}
