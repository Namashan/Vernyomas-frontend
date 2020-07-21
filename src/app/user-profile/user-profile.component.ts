import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../../interfaces/user';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    form: FormGroup;

  @Output()
  submitUser: EventEmitter<User>;
  @Input()
  inputUser: User;

  constructor(private userService: UserService) {
    this.form = new FormGroup({
      username: new FormControl(null,[Validators.required, Validators.maxLength(20)]),
      firstname: new FormControl(null, [Validators.required, Validators.maxLength(50), userService.checkCapital]),
      lastname: new FormControl(null, [Validators.required,userService.checkCapital]),
      password: new FormControl(null, [Validators.required, Validators.min(8), Validators.max(40),]),
      passwordConfirmation: new FormControl(null, [Validators.required, Validators.min(8), Validators.max(40),]),
      birthDate: new FormControl(null),
      email: new FormControl(null, [Validators.email, Validators.required]),
      isMale: new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(999)]),
      height: new FormControl(null, [Validators.required, Validators.min(120), Validators.max(250)]),

    });
    this.submitUser = new EventEmitter<User>();
  }

  ngOnInit(): void {
  }

  submitForm() {
    const u: User = {
      birthDate: this.form.get('birthdate').value,
      username: this.form.get('username').value,
      surname: this.form.get('surname').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value,
      passwordConfirmation: this.form.get('passwordConfirmation').value,
      height: this.form.get('height').value,
      weight: this.form.get('weight').value,
      firstname: this.form.get('firstname').value,
      gender: this.form.get('gender').value,
    };
    this.submitUser.emit(u);
  }
}
