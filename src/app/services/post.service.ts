import { Injectable } from '@angular/core';
import { Post } from 'models/api-models/post.model';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService {

  constructor(
    private base: BaseService
  ) {
    super(base.http);

  }

  public getPosts(): Observable<Post[]> {
    return this.base.getReq('/posts');
  }

  public getPost(postId: number): Observable<Post> {
    return this.base.getReq('/posts/' + postId)
  }
}
