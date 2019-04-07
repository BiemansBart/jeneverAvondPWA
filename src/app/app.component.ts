import {Component, OnInit} from '@angular/core';
import {JeneverServiceService} from './service/jenever-service.service';
import {Jenever} from '../Jenever';
import {slider} from './route-animations';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider
  ]
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
  }


  installPwa() {
    this.prompt.promptEvent.prompt();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
