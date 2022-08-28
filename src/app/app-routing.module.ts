import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'home'},
  {path:'home', component: HomeComponent, data:{
    breadcrumb:[{label:'Home Page', url:'/home'}]
  }},
  {path:'home/category/:categoryId', component:CategoryComponent, data:{
    breadcrumb:[{label:'Home Page', url:'/home'},{label:'{{customCategory}}', url:'home/category/:categoryId'}]
  }},
  {path:'post/:postId', component:PostDetailComponent, data:{
    breadcrumb:[{label:'Home Page', url:'/home'}]
  }},
  {path:'search/:searchTerm',component:SearchComponent, data:{
    breadcrumb:[{label:'Home Page', url:'/home'}]
  }}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
