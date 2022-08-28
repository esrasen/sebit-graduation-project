import { Injectable } from '@angular/core';
import { Category } from 'models/api-models/category.model';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {

  constructor(
    private base: BaseService
  ) {
    super(base.http);

  }

  public getCategories(): Observable<Category[]> {
    return this.base.getReq('/categories');
  }

  public getCategory(categoryId: number): Observable<Category> {
    return this.base.getReq('/categories/' + categoryId)
  }
}
