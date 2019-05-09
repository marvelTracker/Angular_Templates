import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products/list', component: ProductListComponent},
  {path: 'products', component: ProductComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

