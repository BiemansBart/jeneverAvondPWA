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
  prompt: any;


  constructor(private service: JeneverServiceService) {
    window.addEventListener('beforeinstallprompt', function (e) {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.prompt = e;
      console.log('prompt opgevangen : ');
      console.log(this.prompt);
    });
  }

  ngOnInit(): void {
    this.service.getJenevers().subscribe(x => {
        this.jeneverList = x as Jenever[];
        console.log(this.jeneverList[0].naam);
      },
      error1 => console.log(error1));
    console.log('Pwa is terug gegeven');
  }


  installPwa() {
    this.prompt.promptEvent.prompt();
  }
}
