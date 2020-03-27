import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
value: string;

  constructor() { }

  ngOnInit(): void {
  }

  clickFunction = () => {
    console.log('clicked');
    this.value = 'Clicked';
  }
}
