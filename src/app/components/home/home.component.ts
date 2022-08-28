import { Component, OnInit } from '@angular/core';
import { Category } from 'models/api-models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categoryData: Category[] = [];
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res) => {
      this.categoryData = res;
    })
  }

}
