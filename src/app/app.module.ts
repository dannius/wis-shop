import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '@app/app.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { ShoppingCartInfoComponent } from '@app/components/shopping-cart-info/shopping-cart-info.component';
import { CoreModule } from '@app/core/core.module';
import { MaterialModule } from '@app/material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingCartInfoComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
