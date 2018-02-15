import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './landing/carousel/carousel.component';
import { PopularProductsComponent } from './landing/popular-products/popular-products.component';
import { ServicesComponent } from './landing/services/services.component';
import { ShopComponent } from './shop/shop.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    FooterComponent,
    CarouselComponent,
    PopularProductsComponent,
    ServicesComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
