import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../core/_services/authentication.service';
import { RegisterService } from '../core/_services/register.service';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  everySecond$: Observable<number> = timer(0, 1000);
  datas = [
    { value: 1 },
    { value: 2 },
    { value: 1 },
  ];
  constructor(private fb: FormBuilder,
    private _authenticate: AuthenticationService,
    private _register: RegisterService) { }

  ngOnInit(): void {
    // this.everySecond$.subscribe(second => console.log(second));

  }

}
