import {Component, OnInit} from '@angular/core';
import {JeneverServiceService} from './service/jenever-service.service';
import {Jenever} from '../Jenever';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jeneverAvondPWA';
  jeneverList: Jenever[];
  Pwa;


  constructor(private service: JeneverServiceService) {

  }

  ngOnInit(): void {
    this.service.getJenevers().subscribe(x => {
        this.jeneverList = x as Jenever[];
        console.log(this.jeneverList[0].naam);
      },
      error1 => console.log(error1));
    this.Pwa = this.service.getInstallEvent();
    console.log('Pwa is terug gegeven');
  }

  installPwa() {
    this.Pwa.promptEvent.prompt();
  }
}
