import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/shoppingcart.service.';
import { shoppingItem } from 'src/models';
import { Actions } from 'src/shoppingItem/shoppingitem.component';

@Component({
  selector: 'shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {

  $shoppingItems?:Observable<shoppingItem[]>;
  actions= [Actions.ADDTOCART];
  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
    this.$shoppingItems = this.shoppingCartService.fetchShoppingCartItems();
  }


}
