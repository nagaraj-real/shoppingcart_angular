import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shoppingcart.service.';
import { shoppingItem } from 'src/models';


export enum Actions{
    ADDTOCART= 'ADDTOCART',
    DELETE= 'DELETE'
}

@Component({
  selector: 'shoppingitem',
  templateUrl: './shoppingitem.component.html',
  styleUrls: ['./shoppingitem.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService) { }

  @Input() showNotes: boolean= false;
  @Input() item!: shoppingItem;
  @Input() actions: Actions[]=[];
  ACTIONS = Actions;

  ngOnInit(): void {
  }

  getAssetPath(name:string){
    return `/assets/${name}`
  }
  
  removeFromCart(item:shoppingItem){
    this.shoppingCartService.removeCartItem(item)
  }

  addToCart(item:shoppingItem){
    this.shoppingCartService.addCartItem(item)
  }

  isActionEnabled(action:Actions){
     return this.actions.includes(action);
  }

}
