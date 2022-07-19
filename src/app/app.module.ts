import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { ShoppinglistComponent } from 'src/shoppinglist/shoppinglist.component';
import { ShoppingnavComponent } from 'src/shoppingnav/shoppingnav.component';
import { ShoppingCheckoutComponent } from 'src/shoppingcheckout/shoppingcheckout.component';
import { ShoppingItemComponent } from 'src/shoppingItem/shoppingitem.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent,
    ShoppingnavComponent,
    ShoppingCheckoutComponent,
    ShoppingItemComponent
  ],
  imports: [
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
