import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AjoutlibrairieComponent } from './ajoutlibrairie/ajoutlibrairie.component';

const appRoutes: Routes = [
  { path: 'ajoutLibrairie', component: AjoutlibrairieComponent }]

@NgModule({
  declarations: [
    AppComponent,
    AjoutlibrairieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
