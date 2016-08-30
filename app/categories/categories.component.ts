import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Category, CategoryService }  from './category.service';
import { Subscription }       from 'rxjs/Subscription';

@Component({
  templateUrl:'app/categories/templates/categories.html'
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categories: Category[];

  private selectedId: number;
  private sub: Subscription;

  constructor(
    private service: CategoryService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.selectedId = +params['id'];
        this.service.getCategories()
          .then(categories => this.categories = categories);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isSelected(category: Category) { return category.id === this.selectedId; }

  onSelect(category: Category) {
    this.router.navigate(['/category', category.id]);
  }

}