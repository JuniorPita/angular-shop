import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardPageComponent} from './card-page/card-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },

      {
        path: '',
        component: MainPageComponent
      },

      {
        path: 'product/:id',
        component: ProductPageComponent
      },

      {
        path: 'card',
        component: CardPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
