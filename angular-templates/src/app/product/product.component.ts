import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
 })
export class ProductComponent {
  title = 'product';

constructor(private _router: Router) { }

  navigateProductList(): void {
    this._router.navigate(['/products/list']);
  }
}
