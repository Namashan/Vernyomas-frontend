import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../interfaces/user';
import {Values} from '../../interfaces/values';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';

@Component({
    selector: 'app-diagram',
    templateUrl: './diagram.component.html',
    styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {
    @Input()
    inputUser: Values;

    pointerX: number;
    pointerY: number;
    form: FormGroup;

    constructor(private userService: UserService) {
        this.form = new FormGroup({
            // conditionId: new FormControl('', [Validators.required]),
            systolic: new FormControl(0, [Validators.required, Validators.min(1)]),
            diastolic: new FormControl(0, [Validators.required]),
            pulse: new FormControl(0, [Validators.required]),
        })
    }

    ngOnInit(): void {
    }

    calculate() {
        const sys = this.form.get('systolic').value;
        const dia = this.form.get('diastolic').value;
        this.pointerX = Math.max(0, Math.min(1, sys / 200)) * 500;
        this.pointerY = Math.max(0, Math.min(1, dia / 120)) * 500
    }


    submitForm2() {

        const d: Values = {
            //conditionId: this.form.get('day').value,
            systolic: this.form.get('systolic').value,
            diastolic: this.form.get('diastolic').value,
            pulse: this.form.get('pulse').value,
        };
        this.userService.sendData(d).subscribe(response => {

        });
    }

}
