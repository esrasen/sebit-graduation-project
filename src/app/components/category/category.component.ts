import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';
import {NgDynamicBreadcrumbService} from 'ng-dynamic-breadcrumb';
import { Category } from 'models/api-models/category.model';
import { Post } from 'models/api-models/post.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryId: number = 0;
  categoryObj!: Category;
  postData: Post[] = [];
  totalPost: number =0;
  breadcrumb:any;

  @Input() max: number = 280;

  readMore: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private postService:PostService,
    private route: ActivatedRoute,
    private ngDynamicBreadcrumbService:NgDynamicBreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.categoryId = Number( this.route.snapshot.paramMap.get('categoryId'));

    this.categoryService.getCategory(this.categoryId).subscribe((res)=>{
      this.categoryObj = res;
      this.breadcrumb = {customCategory: res.name};
      this.ngDynamicBreadcrumbService.updateBreadcrumbLabels(this.breadcrumb);
    })

    this.postService.getPosts().subscribe((res)=>{
      this.postData = res.filter((x: {category_id: number}) =>x.category_id == this.categoryId)
      .sort((a: any, b:any)=>{ return b.date > a.date ? 1 : b.date < a.date ? -1 : 0});

      this.totalPost = Object.keys(this.postData).length;

    })
  }

}
