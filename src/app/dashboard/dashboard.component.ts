import { Component, OnInit } from '@angular/core';

import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [ProductService]
})
export class DashboardComponent implements OnInit {

  title: string = 'Produktübersicht';
  data: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.data = this.productService.getAll();
  }

}
