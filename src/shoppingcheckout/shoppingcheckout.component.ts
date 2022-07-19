import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/shoppingcart.service.';
import { shoppingItem } from 'src/models';
import { Actions } from 'src/shoppingItem/shoppingitem.component';

@Component({
  selector: 'shoppingcheckout',
  templateUrl: './shoppingcheckout.component.html',
  styleUrls: ['./shoppingcheckout.component.scss']
})
export class ShoppingCheckoutComponent implements OnInit {

  $shoppingItems?:Observable<shoppingItem[]>;
  actions = [Actions.DELETE];
  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
    this.$shoppingItems = this.shoppingCartService.fetchCartItems();
  }



}
