import { Component, OnInit } from '@angular/core';



export interface Product {
  id: number;
  name: string;
}

export const Products: Product[] = [
  { id: 1233, name: 'Mr. Nice' },
  { id: 4233, name: 'Narco' },
  { id: 933, name: 'Bombasto' },
  { id: 799, name: 'Celeritas' },
  { id: 111, name: 'Magneta' },
  { id: 3434, name: 'RubberMan' },
  { id: 5234, name: 'Dynama' },
  { id: 75645, name: 'Dr IQ' },
  { id: 1459, name: 'Magma' },
  { id: 2450, name: 'Tornado' }
];

@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html'
})


export class ProductListComponent implements OnInit {
title: string;
products: Product[];

  ngOnInit(): void {
    this.title = 'Product List';
    this.products = Products;
  }

}
