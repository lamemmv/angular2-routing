import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CategoriesComponent }    from './categories.component';
import { CategoryDetailComponent }  from './category-detail.component';

import { CategoryService } from './category.service';

import { categoriesRouting } from './categories.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    categoriesRouting
  ],
  declarations: [
    CategoriesComponent,
    CategoryDetailComponent
  ],
  providers: [
    CategoryService
  ]
})
export class CategoriesModule {}