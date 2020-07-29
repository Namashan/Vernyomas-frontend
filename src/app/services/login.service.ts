import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedIn: BehaviorSubject<boolean>;
  public isLoggedIn$;


  constructor() {
    this.isLoggedIn = new BehaviorSubject<boolean>(false);
    this.isLoggedIn$ = this.isLoggedIn.asObservable();
    // TODO megkérdezni a szervertől, hogy be vagyunk-e lépve

  }

}
