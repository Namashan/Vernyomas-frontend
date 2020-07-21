import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {AbstractControl, ValidationErrors} from "@angular/forms";

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
}
