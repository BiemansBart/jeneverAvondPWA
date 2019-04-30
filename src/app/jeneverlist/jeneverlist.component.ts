import {Component, OnInit} from '@angular/core';
import {JeneverServiceService} from '../service/jenever-service.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-jeneverlist',
  templateUrl: './jeneverlist.component.html',
  styleUrls: ['./jeneverlist.component.scss']
})
export class JeneverlistComponent implements OnInit {
  jeneverList;
  ratings = [1, 2, 3, 4, 5];
  src = [];
  gebruikersRating: number;
  filterMenuActivated = false;
  checked = false;
  nietGedronken = false;
  merken = [];
  types = [];

  constructor(private jeneverService: JeneverServiceService, private sanitazer: DomSanitizer) {
  }

  ngOnInit() {
    this.filterMenuActivated = true;
    this.jeneverService.getJenevers().subscribe(x => {
      this.jeneverList = x;
    });

    for (let i = 0; i < 5; i++) {
      this.src[i] = this.sanitazer.bypassSecurityTrustUrl('https://img.icons8.com/material-outlined/24/000000/christmas-star.png');
    }
    this.gebruikersRating = 0;
  }

  changeSter(i: number) {
    this.gebruikersRating = i + 1;
    for (let j = 0; j < this.src.length; j++) {
      this.src[j] = this.sanitazer.bypassSecurityTrustUrl('https://img.icons8.com/material-outlined/24/000000/christmas-star.png');
    }
    for (let j = 0; j < this.gebruikersRating; j++) {
      this.src[j] = this.sanitazer.bypassSecurityTrustUrl('https://img.icons8.com/color/24/000000/christmas-star.png');
    }
    this.filterJeneversOnScore(i);
  }

  openFilter() {
    this.filterMenuActivated = !this.filterMenuActivated;
  }

  filterJeneversOnScore(i: number) {
    const list = [];
    this.jeneverList = this.jeneverService.getJenevers().subscribe(x => {
      this.jeneverList = x;
      for (const jenever of this.jeneverList) {
        if (jenever.rating >= i + 1) {
          list.push(jenever);
        }
      }
      this.jeneverList = list;
    });

  }

  filterGedronken($event: any) {
    if ($event.checked) {
      this.checked = !this.checked;
      const list = [];
      this.jeneverList = this.jeneverService.getJenevers().subscribe(x => {
        this.jeneverList = x;
        for (const jenever of this.jeneverList) {
          console.log(localStorage.getItem(jenever.naam + 'gedronken'));
          if (localStorage.getItem(jenever.naam + ' gedronken') === 'true') {
            list.push(jenever);
          }
        }
        this.jeneverList = [];
        this.jeneverList = list;
      });
    } else {
      this.jeneverList = [];
      this.jeneverList = this.jeneverService.getJenevers().subscribe(x => {
        this.jeneverList = x;
      });
    }
  }

  filterNietGedronken($event: any) {
    if ($event.checked) {
      this.nietGedronken = !this.nietGedronken;
      const list = [];
      this.jeneverList = this.jeneverService.getJenevers().subscribe(x => {
        this.jeneverList = x;
        for (const jenever of this.jeneverList) {
          console.log(localStorage.getItem(jenever.naam + 'gedronken'));
          if (localStorage.getItem(jenever.naam + ' gedronken') === null) {
            list.push(jenever);
          }
        }
        this.jeneverList = [];
        this.jeneverList = list;
      });
    } else {
      this.jeneverList = [];
      this.jeneverList = this.jeneverService.getJenevers().subscribe(x => {
        this.jeneverList = x;
      });
    }
  }
}
