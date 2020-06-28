import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  post = JSON.parse(localStorage.getItem('post'));
  params: String;
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    const post = this.route.params.subscribe(params => {
      this.params = params.id;
    });
    window.scroll(0, 0);
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
