import {Injectable} from '@angular/core';
import {Jenever} from '../../Jenever';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class JeneverServiceService {
  promptEvent: any;

  constructor(private db: AngularFireDatabase) {
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }

  public getInstallEvent() {
    return this.promptEvent;
  }

  public getJenevers(): Observable<any[]> {
    return this.db.list('jenevers').valueChanges();
  }

  public updateJenever(jenever: Jenever) {
    this.db.object('jenevers/' + jenever.id).update(jenever);
  }
}
