import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent }    from './categories.component';
import { CategoryDetailComponent }  from './category-detail.component';

const categoriesRoutes: Routes = [
  { path: 'categories',  component: CategoriesComponent },
  { path: 'category/:id', component: CategoryDetailComponent }
];

export const categoriesRouting: ModuleWithProviders = RouterModule.forChild(categoriesRoutes);