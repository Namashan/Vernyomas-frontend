import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';

import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AlertService, AuthenticationService} from "../_services";

@Component({
    selector: 'app-loginmodal',
    templateUrl: './loginmodal.component.html',
})
export class LoginmodalComponent implements OnInit {
    loading = false;
    form: FormGroup;
    private returnUrl: string;

    constructor(public activeModal: NgbActiveModal,
                private userService: UserService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService,
                private alertService : AlertService,
    ) {
        this.form = new FormGroup({
            userName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
            password: new FormControl(null, [Validators.required])
        });
    }

    get f() {
        return this.form.controls;
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                response => {
                    // this.router.navigate([this.returnUrl]);
                    this.activeModal.dismiss();
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
