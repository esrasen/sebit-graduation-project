import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categoryData:any;
  constructor(
    private categoryService:CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res)=>{
      this.categoryData = res;
    })
  }

}
