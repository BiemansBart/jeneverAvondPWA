import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {LOCAL_STORAGE, StorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  src = [];
  @Input()
  jeneverNaam;
  @Output()
  ratingEvent = new EventEmitter;
  gebruikersRating: number;
  constructor(private sanitazer: DomSanitizer, @Inject(LOCAL_STORAGE) private localStorage: StorageService) { }

  ngOnInit() {
    console.log('rating has been made');
    for (let i = 0; i < 5; i++) {
      this.src[i] = this.sanitazer.bypassSecurityTrustUrl('https://img.icons8.com/material-outlined/24/000000/christmas-star.png');
    }
    const ratingVanGebruiker = this.localStorage.get(this.jeneverNaam);
    if (ratingVanGebruiker === null) {
      this.gebruikersRating = 0;
    } else {
      this.gebruikersRating = ratingVanGebruiker;
    }
    this.veranderRatingImg();
  }
  veranderRatingImg() {
    for (let j = 0; j < this.src.length; j++) {
      this.src[j] = this.sanitazer.bypassSecurityTrustUrl('https://img.icons8.com/material-outlined/24/000000/christmas-star.png');
    }
    for (let j = 0; j < this.gebruikersRating; j++) {
      this.src[j] = this.sanitazer.bypassSecurityTrustUrl('https://img.icons8.com/color/24/000000/christmas-star.png');
    }
  }
  changeRating(i: number) {
    this.gebruikersRating = i + 1;
    console.log('uw rating bedraagt : ' + this.gebruikersRating);
    this.ratingEvent.emit(this.gebruikersRating);
  }

}
