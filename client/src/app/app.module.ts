import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {LibrairyBooksService} from './librairy-books.service';
import {LibrairiesService} from './librairies.service';
import { AppComponent } from './app.component';
import { AjoutlibrairieComponent } from './ajoutlibrairie/ajoutlibrairie.component';
import { DetailLibrairyComponent } from './detail-librairy/detail-librairy.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const appRoutes: Routes = [
  { path: 'ajoutLibrairie', component: AjoutlibrairieComponent },
  { path: 'détailBibliothèque', component: DetailLibrairyComponent },
  { path: 'modifierLivre', component: UpdateBookComponent }]

@NgModule({
  declarations: [
    AppComponent,
    AjoutlibrairieComponent,
    DetailLibrairyComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule,
  ],
  providers: [LibrairyBooksService, LibrairiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
