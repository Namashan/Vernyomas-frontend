import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
})
export class LoginmodalComponent implements OnInit {

  form: FormGroup;
  constructor(public activeModal: NgbActiveModal, private userService: UserService) {
    this.form = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      password: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  // login(): void {
  //   const user: UserLogin = {
  //     userName: this.form.get('userName').value,
  //     password: this.form.get('password').value
  //   };
  //   console.log(JSON.stringify(user));
  //   this.userService.login(user).subscribe((response) => {
  //     if (response.success) {
  //       this.userService.setUser(user);
  //       this.activeModal.dismiss();
  //     }
  //     // alert(response.message);
  //   }, error => {
  //     alert(error.message);
  //   });
  //
  // }

}