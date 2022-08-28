import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
postId:any;
postObj:any;
  constructor(
    private postService:PostService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('postId');

    this.postService.getPost(this.postId).subscribe((res)=>{
      this.postObj = res;
    })
  }

}
