import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
value: string;

isActive: boolean[] = [];
// isActive: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickFunction = () => {
    this.value = 'Clicked';
  }

  highlight(item: string) {
    this.isActive[item] = !this.isActive[item];
  }

}
