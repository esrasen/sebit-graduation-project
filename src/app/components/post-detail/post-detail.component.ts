import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'models/api-models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  postId: number = 0;
  postObj!: Post;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('postId'));

    this.postService.getPost(this.postId).subscribe((res) => {
      this.postObj = res;
    })
  }

}
