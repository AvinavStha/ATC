import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './main-layout/cards/cards.component';
import { BannerComponent } from './pages/banner/banner.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductsComponent } from './pages/products/products.component';
import {AddToCartComponent} from './pages/add-to-cart/add-to-cart.component';

const routes: Routes = [
  { path:'', component:CardsComponent},
  { path:'banner', component:BannerComponent},
  { path:'about-us', component:AboutUsComponent},
  { path:'products', component:ProductsComponent},
  { path:'contact-us', component:ContactUsComponent},
  { path:'add-to-cart', component:AddToCartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
