import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  
})
export class AccueilComponent implements OnInit {

  constructor() { }
  public imagesUrl;

  ngOnInit() {
    this.imagesUrl = [
      './assets/images/bu1.jpg',
      './assets/images/bu2.jpg',
      './assets/images/bu3.jpg',
      './assets/images/bu4.jpg',
    ];
  }
}
