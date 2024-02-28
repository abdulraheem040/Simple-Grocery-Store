import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ShopComponentComponent } from './shop-component/shop-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';

export const routes: Routes = [
    {path:'Home', component:HomeComponentComponent},
    {path:'Home/Shop', component:ShopComponentComponent},
    {path:'Home/Products', component:ProductComponentComponent},
    {path:'Home/Blog', component:BlogComponentComponent},
    {path:'Home/ContactUs', component:ContactComponentComponent},
    {path:'Home/Cart', component:CartComponentComponent},
    {path:'**', component:HomeComponentComponent}
];
