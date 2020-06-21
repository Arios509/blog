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

  //   this.router.events.subscribe((val) => {
  //     // see also 
  //     console.log(val); 
  // });

    // this.route.params.subscribe(params => {
    //   console.log(`MD: MainComponent -> ngOnInit -> params`, params);
    //   if(params['slug']){
    //    this.isActive = true;
    //   }else{
    //    this.isActive = false;
    //   }
    // });
  }

  clickFunction = () => {
    console.log('clicked');
    this.value = 'Clicked';
  }

  highlight(item: string) {
    this.isActive[item] = !this.isActive[item];
    console.log(`MD: MainComponent -> highlight -> this.isActive[item]`, this.isActive[item]);
  }

}
