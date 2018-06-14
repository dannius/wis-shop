import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from '@app/app.component';
import { routes } from '@app/app.routes';
import { HeaderComponent } from '@app/components/header/header.component';
import { MainShopComponent } from '@app/components/main-shop/main-shop.component';
import { ProductListResolver } from '@app/components/main-shop/product-list.resolver';
import { ProductItemComponent } from '@app/components/products/item/item.component';
import { ProductListComponent } from '@app/components/products/list/list.component';
import { ProductDialogComponent } from '@app/components/products/product-dialog/product-dialog.component';
import { ScaleImageDialogComponent } from '@app/components/products/scale-image-dialog/scale-image-dialog.component';
import { ShoppingCartInfoComponent } from '@app/components/shopping-cart-info/shopping-cart-info.component';
import { ShoppingCartComponent } from '@app/components/shopping-cart/shopping-cart.component';
import { WishCartComponent } from '@app/components/wish-cart/wish-cart.component';
import { CoreModule } from '@app/core/core.module';
import { MaterialModule } from '@app/material.module';
import { ProductService } from '@app/services/product.service';
import { Base64ImagePipe, PricePipe } from '@app/shared/pipes';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingCartInfoComponent,
    MainShopComponent,
    WishCartComponent,
    ShoppingCartComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDialogComponent,
    ScaleImageDialogComponent,

    // PIPES
    Base64ImagePipe,
    PricePipe
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService,

    // RESOLVERS
    ProductListResolver
  ],
  entryComponents: [
    ProductDialogComponent,
    ScaleImageDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
