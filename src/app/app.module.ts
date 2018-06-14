import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from '@app/app.component';
import { routes } from '@app/app.routes';
import { HeaderComponent } from '@app/components/header/header.component';
import { MainShopComponent } from '@app/components/main-shop/main-shop.component';
import { ShoppingCartInfoComponent } from '@app/components/shopping-cart-info/shopping-cart-info.component';
import { ShoppingCartComponent } from '@app/components/shopping-cart/shopping-cart.component';
import { WishCartComponent } from '@app/components/wish-cart/wish-cart.component';
import { CoreModule } from '@app/core/core.module';
import { MaterialModule } from '@app/material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingCartInfoComponent,
    MainShopComponent,
    WishCartComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
