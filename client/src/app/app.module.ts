import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AjoutlibrairieComponent } from './ajoutlibrairie/ajoutlibrairie.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SliderModule } from 'angular-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'ajoutLibrairie', component: AjoutlibrairieComponent }]

@NgModule({
  declarations: [
    AppComponent,
    AjoutlibrairieComponent,
    AccueilComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
