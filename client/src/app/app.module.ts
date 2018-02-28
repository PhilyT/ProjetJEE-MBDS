import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {LibrairyBooksService} from './librairy-books.service';
import {LibrairiesService} from './librairies.service';
import { AppComponent } from './app.component';
import { AjoutlibrairieComponent } from './ajoutlibrairie/ajoutlibrairie.component';

import { AccueilComponent } from './accueil/accueil.component';
import { SliderModule } from 'angular-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'ajoutLibrairie', component: AjoutlibrairieComponent },
  { path: 'detailBibliotheque/:id', component: DetailLibrairyComponent },
  { path: 'modifierLivre/:idLibrairy/:idBook', component: UpdateBookComponent }]

import { DetailLibrairyComponent } from './detail-librairy/detail-librairy.component';
import { UpdateBookComponent } from './update-book/update-book.component';




@NgModule({
  declarations: [
    AppComponent,
    AjoutlibrairieComponent,
    AccueilComponent,

    DetailLibrairyComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    HttpModule,
  ],
  providers: [LibrairyBooksService, LibrairiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
