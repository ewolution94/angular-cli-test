import { Injectable } from '@angular/core';
import { Product } from './product';

const DATA: Product[] = [
  { id: 1, title: 'Product 1', teaser: 'Teaser', description: 'Desc', numberOfMediaFiles: 0 },
  { id: 2, title: 'Product 2', teaser: 'Teaser', description: 'Desc', numberOfMediaFiles: 0 },
  { id: 3, title: 'Product 3', teaser: 'Teaser', description: 'Desc', numberOfMediaFiles: 0 },
  { id: 4, title: 'Product 4', teaser: 'Teaser', description: 'Desc', numberOfMediaFiles: 0 },
  { id: 5, title: 'Product 5', teaser: 'Teaser', description: 'Desc', numberOfMediaFiles: 0 },
  { id: 6, title: 'Product 6', teaser: 'Teaser', description: 'Desc', numberOfMediaFiles: 0 },
  { id: 7, title: 'Product 7', teaser: 'Teaser', description: 'Desc', numberOfMediaFiles: 0 },
  { id: 8, title: 'Product 8', teaser: 'Teaser', description: 'Desc', numberOfMediaFiles: 0 },
  { id: 9, title: 'Product 9', teaser: 'Teaser', description: 'Desc', numberOfMediaFiles: 0 },
  { id: 10, title: 'Product 10', teaser: 'Teaser', description: 'Desc', numberOfMediaFiles: 0 }
];

@Injectable()
export class ProductService {

  constructor() { }

  getAll(): Product[] {
    return DATA;
  }

}
