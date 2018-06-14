import { Routes } from '@angular/router';
import { MainShopComponent } from '@app/components/main-shop/main-shop.component';
import { ShoppingCartComponent } from '@app/components/shopping-cart/shopping-cart.component';
import { WishCartComponent } from '@app/components/wish-cart/wish-cart.component';


export const routes: Routes = [
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
  { path: 'shop', component: MainShopComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'wish-cart', component: WishCartComponent }
];