import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { Category, CategoryService }  from './category.service';
import { Subscription }       from 'rxjs/Subscription';

@Component({
  templateUrl: 'app/categories/templates/category.html' 
})
export class CategoryDetailComponent implements OnInit, OnDestroy  {
  category: Category;

  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CategoryService) {}

  ngOnInit() { 
    this.sub = this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.service.getCategory(id).then(category => this.category = category);
     });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoCategories() {
    let categoryId = this.category ? this.category.id : null;
    // Pass along the category id if available
    // so that the categories component can select that category.
    this.router.navigate(['/categories', { id: categoryId }]);
  }
}
