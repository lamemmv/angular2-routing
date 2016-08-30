import { Injectable } from '@angular/core';

export class Category {
  constructor(public id: number, public name: string) { }
}

let CATEGORIES = [
  new Category(1, 'Bavarage'),
  new Category(2, 'Movies'),
  new Category(3, 'Eating'),
  new Category(4, 'Others')
];

let categoriesPromise = Promise.resolve(CATEGORIES);

@Injectable()
export class CategoryService {
  getCategories() { return categoriesPromise; }

  getCategory(id: number | string) {
    return categoriesPromise
      .then(categories => categories.find(hero => hero.id === +id));
  }
}