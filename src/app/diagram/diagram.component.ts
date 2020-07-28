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

    public top: number;
    public left: number;
    form: FormGroup;

    constructor(private userService: UserService) {
        this.form = new FormGroup({
            //conditionId: new FormControl('', [Validators.required]),
            systolic: new FormControl('', [Validators.required,]),
            diastolic: new FormControl('', [Validators.required]),
            pulse: new FormControl('', [Validators.required]),
        })
    }

    ngOnInit(): void {
    }

    calculate(systolic:string, diastolic:string) {
        document.getElementById('pointer').style.top = systolic;
        document.getElementById('pointer').style.left = diastolic;

    }

    sendData(value: Values): Observable<any> {
        return this.userService.http.post(environment.apiEndpoint + 'measure_details', value, {withCredentials: true});
    }

    submitForm() {

        const data: Values = {
            //conditionId: this.form.get('day').value,
            systolic: this.form.get('systolic').value,
            diastolic: this.form.get('diastolic').value,
            pulse: this.form.get('pulse').value,
        };
        this.sendData(data).subscribe(response => {

        });
    }

}
