import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'models/api-models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  postData: Post[] = [];

  @Input() max: number = 280;

  readMore: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.postService.getPosts().subscribe(res => {
        if (params.searchTerm) {
          this.postData = res.filter((post: any) =>
            post.description.toLowerCase().includes(params.searchTerm.toLowerCase()) |
            post.title.toLowerCase().includes(params.searchTerm.toLowerCase())
          )
        }
        else {
          this.postService.getPosts().subscribe((res) => {
            this.postData = res;
          })
        }
      })
    })
  }

}
