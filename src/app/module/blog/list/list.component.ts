import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/data/list.json';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  lists = data.list;
  constructor() { }

  ngOnInit(): void {
  }

}
