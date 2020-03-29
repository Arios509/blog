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
  post: string;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.post = './assets/post/' +  params.id + '.md';
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
