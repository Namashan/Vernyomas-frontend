import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';
import {User} from '../interfaces/user';
import {environment} from '../environments/environment.prod';
import {UserLogin} from "../interfaces/user-login";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  checkCapital(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.charAt(0)
        && control.value.charAt(0).toUpperCase() === control.value.charAt(0)) {
      return null;
    } else {
      return {capital: true};
    }
  }

  checkPassword(group: FormGroup): ValidationErrors | null {
    if (group.get('password').value === group.get('passwordConfirmation').value){
      return null;
    } else{
      return { 'passwords-not-match' : true };
    }
  }

  addUser(user: User): Observable<any> {
    const u = {...user, isMale: user.isMale === 'true'};
      return this.http.post(environment.apiEndpoint + 'register', u, {withCredentials: true});
  }

  login(user: UserLogin): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'login', user, {withCredentials: true})
  }
}
