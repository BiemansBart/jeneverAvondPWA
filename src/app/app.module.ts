import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { JeneverComponent } from './jenever/jenever.component';
import {RouterModule, Routes} from '@angular/router';
import {StorageServiceModule} from 'angular-webstorage-service';
import { RatingComponent } from './rating/rating.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const appRoutes: Routes = [
  {path: '', component: JeneverComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    JeneverComponent,
    RatingComponent
  ],
  imports: [
    BrowserAnimationsModule,
    StorageServiceModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AppRoutingModule
  ],
  providers: [AngularFireDatabase, HashLocationStrategy],
  bootstrap: [AppComponent],
  exports: [MatMenuModule, MatExpansionModule, MatButtonModule, MatToolbarModule, MatCheckboxModule]
})
export class AppModule { }
