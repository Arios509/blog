import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/shared/global/global.constant';
import { map } from 'rxjs/operators';
import { Post } from '../_models/post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  // Create posts
  createPost = (posts: Post) => {
    return this.http.post<Post>(`${environment.firebase_server}/post.json`, posts);
  }



  // Get data from firebase
  fetchPost = () => {
    return this.http.get<{[key: string]: Post}>(`${environment.firebase_server}/post.json`)
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
  }
}
