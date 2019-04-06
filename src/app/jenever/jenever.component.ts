import {Component, Inject, Input, OnInit} from '@angular/core';
import {Jenever} from '../../Jenever';
import {JeneverServiceService} from '../service/jenever-service.service';
import {LOCAL_STORAGE, StorageService} from 'angular-webstorage-service';


@Component({
  selector: 'app-jenever',
  templateUrl: './jenever.component.html',
  styleUrls: ['./jenever.component.scss']
})
export class JeneverComponent implements OnInit {
  @Input()
  jenever: Jenever;
  gedronken = false;
  constructor(private service: JeneverServiceService, @Inject(LOCAL_STORAGE) private localStorage: StorageService) { }

  ngOnInit() {
    console.log('jeneverComponent gemaakt');
   this.gedronken = this.localStorage.get(this.jenever.naam + ' gedronken');
  }

  updateRating(gebruikersRating: number) {
    this.localStorage.set(this.jenever.naam, gebruikersRating);
    if (this.jenever.aantalStemmen === 0) {
      this.jenever.rating = gebruikersRating;
    } else {
      const rating = this.jenever.rating + (gebruikersRating - this.jenever.rating) / this.jenever.aantalStemmen;
      this.jenever.rating = Math.round(rating * 10) / 10;
    }

    console.log(this.jenever.rating);
    this.jenever.aantalStemmen++;
    this.service.updateJenever(this.jenever);
  }

  VeranderGedronken() {
    if (this.localStorage.get(this.jenever.naam + ' gedronken') === null) {
      this.localStorage.set(this.jenever.naam + ' gedronken', false);
      console.log('aangemaakt');
    } else {
      this.localStorage.set(this.jenever.naam + ' gedronken', !this.localStorage.get(this.jenever.naam + ' gedronken'));
      console.log('verandert');
    }
  }

}
