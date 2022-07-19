import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/shoppingcart.service.';
import { shoppingItem } from 'src/models';

@Component({
  selector: 'shoppingnav',
  templateUrl: './shoppingnav.component.html',
  styleUrls: ['./shoppingnav.component.scss']
})
export class ShoppingnavComponent implements OnInit {

  $cartItems?:Observable<shoppingItem[]>;
  constructor(private shoppingCartService:ShoppingCartService,private route: Router) { }


  ngOnInit(): void {
    this.$cartItems = this.shoppingCartService.fetchCartItems();
  }

  navigateToCheckout(){
    if(this.shoppingCartService.getCurrentCartCount() > 0){
      this.route.navigateByUrl('/checkout')
    }
  }

  navigateToHome(){
    this.route.navigateByUrl('/')
  }

}
