import {Component, OnInit} from '@angular/core';
import {JeneverServiceService} from '../service/jenever-service.service';

@Component({
  selector: 'app-jeneverlist',
  templateUrl: './jeneverlist.component.html',
  styleUrls: ['./jeneverlist.component.scss']
})
export class JeneverlistComponent implements OnInit {
  jeneverList;

  constructor(private jeneverService: JeneverServiceService) {
  }

  ngOnInit() {
    this.jeneverService.getJenevers().subscribe(x => {
      this.jeneverList = x;
    });
  }

}
