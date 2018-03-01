import { Component, OnInit } from '@angular/core';
import { LibrairiesService } from '../librairies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifilibrary',
  templateUrl: './modifilibrary.component.html',
  styleUrls: ['./modifilibrary.component.css']
})
export class ModifilibraryComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,private serviceLibrary: LibrairiesService) { }
 nom:string;
 adresse:string;
 an:number;
 id:number;
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.id = params['idLibrairy'];
      this. serviceLibrary.getLibrairy(this.id).subscribe(response => {
        console.log(response);
        this.nom = response.name;
        this.adresse = response.address;
        this.an = response.yearCreated;
       
      });

    });
  }
  editLibrary(){
    
      let ob={id:this.id, name:this.nom ,address:this.adresse ,yearCreated:this.an};
      this.serviceLibrary.putLibrairy(ob).subscribe(response=> console.log(response.data));
      alert("modification réussi");
  }
  retour() {
    this.router.navigate(['/detailBibliotheque/' + this.id]);
  }
    


  

}
