import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../../interfaces/user';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  form: FormGroup;

  @Input()
  inputUser: User;

  constructor(private userService: UserService) {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      firstname: new FormControl(null, [Validators.required, Validators.maxLength(50), userService.checkCapital]),
      surname: new FormControl(null, [Validators.required, userService.checkCapital]),
      password: new FormControl(null, [Validators.required, Validators.min(8), Validators.max(40),]),
      passwordConfirmation: new FormControl(null, [Validators.required, Validators.min(8), Validators.max(40),]),
      birthDate: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      isMale: new FormControl(false),
      weight: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(999)]),
      height: new FormControl(null, [Validators.required, Validators.min(120), Validators.max(250)]),

    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    const u: User = {
      birthDate: this.form.get('birthDate').value,
      username: this.form.get('username').value,
      surname: this.form.get('surname').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value,
      passwordConfirmation: this.form.get('passwordConfirmation').value,
      height: this.form.get('height').value,
      weight: this.form.get('weight').value,
      firstname: this.form.get('firstname').value,
      isMale: this.form.get('isMale').value,
    };
    this.userService.addUser(u).subscribe(response => {

    });
  }
}

