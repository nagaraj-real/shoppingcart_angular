import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCheckoutComponent } from 'src/shoppingcheckout/shoppingcheckout.component';
import { ShoppinglistComponent } from 'src/shoppinglist/shoppinglist.component';

const routes: Routes = [{
  path: "home", component: ShoppinglistComponent},
  {path: "checkout", component: ShoppingCheckoutComponent},
  {path: "**", component: ShoppinglistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
