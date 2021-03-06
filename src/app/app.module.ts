import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {JeneverComponent} from './jenever/jenever.component';
import {RouterModule, Routes} from '@angular/router';
import {StorageServiceModule} from 'angular-webstorage-service';
import {RatingComponent} from './rating/rating.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ServiceWorkerModule} from '@angular/service-worker';
import {JeneverlistComponent} from './jeneverlist/jeneverlist.component';
import {HomepageComponent} from './homepage/homepage.component';
import {MatCardModule, MatDatepickerModule, MatIconModule, MatSelectModule} from '@angular/material';
import {LineupComponent} from './lineup/lineup.component';


const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'lineup', component: LineupComponent},
  {path: 'jeneverlist', component: JeneverlistComponent, data: {animation: 'isLeft'}},
  {path: '**', component: HomepageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    JeneverComponent,
    RatingComponent,
    JeneverlistComponent,
    HomepageComponent,
    LineupComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    StorageServiceModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {useHash: true}
    ),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule
  ],
  providers: [AngularFireDatabase, HashLocationStrategy],
  bootstrap: [AppComponent],
  exports: [MatMenuModule, MatExpansionModule, MatButtonModule, MatToolbarModule, MatCheckboxModule]
})
export class AppModule {
}
