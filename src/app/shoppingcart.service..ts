import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { shoppingItem } from "src/models";

@Injectable({
    providedIn:"root"
})
export class ShoppingCartService {

    public cartItemsSub = new BehaviorSubject<shoppingItem[]>([]);
    //private static readonly url ="http://localhost:8080/api/items"
    constructor(private $http: HttpClient){
    }

    public fetchShoppingCartItems():Observable<shoppingItem[]>{
        return of([{"id":1,"name":"Chair","description":"Notes about brown Chair","imageURL":"chair.jpg"},
        {"id":2,"name":"Dining Table","description":"Notes about large dining table","imageURL":"dining.jpg"},
        {"id":3,"name":"Sofa","description":"Notes about brown Sofa","imageURL":"sofa.jpg"}])
    }

    public fetchCartItems():Observable<shoppingItem[]>{
        const items = this.getFromStorage();
        if(items){
            this.cartItemsSub.next(items);
        }
        return this.cartItemsSub.asObservable();
    }

    public addCartItem(item:shoppingItem){
        const cartItems = this.cartItemsSub.getValue();
        if(!(cartItems.filter(i=>i.id===item.id).length>0)){
            cartItems.push(item);
        }
        this.saveToStorage(cartItems);
    }

    public removeCartItem(item:shoppingItem){
        const cartItems = this.cartItemsSub.getValue();
        const updatedItems = cartItems.filter(i=>i.id!==item.id);
        this.cartItemsSub.next(updatedItems);
        this.saveToStorage(updatedItems);
    }

    public getCurrentCartCount(){
        return this.cartItemsSub.getValue().length;
    }

    private saveToStorage(cartItems:shoppingItem[]){
        sessionStorage.setItem('cartItems',JSON.stringify(cartItems))
    }

    private getFromStorage(){
        const items = sessionStorage.getItem('cartItems');
       if(items){
          return JSON.parse(items);
       }
    }



}