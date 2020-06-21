import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/data/list.json';
import { PostService } from 'src/app/core/_services/post.service';
import { Post } from 'src/app/core/_models/post.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  // lists = data.list;
  lists: Post[] = [];
  constructor(private _postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.onFetchPosts();
  }

  onFetchPosts = () => {
    this._postService.fetchPost().subscribe( posts => {
      this.lists = posts;
    });
  }

  onViewPost = (post) => {
    localStorage.setItem('post', JSON.stringify(post))
    this.router.navigate(['/article/post']);
  }

}
