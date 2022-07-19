import { HttpClient, HttpHandler } from "@angular/common/http";
import { observable, Observable } from "rxjs";
import { ShoppingCartService } from "./shoppingcart.service.";

// Straight Jasmine testing without Angular's testing support
describe('Shopping service', () => {
    let shoppingService: ShoppingCartService;
    let httpClientSpy: jasmine.SpyObj<HttpClient> 
    
    beforeEach(() => { 
        httpClientSpy = jasmine.createSpyObj('HTTPClient',['get']);
        shoppingService  = new ShoppingCartService(httpClientSpy); 
    });
  
    it('#fetchShoppingCartItems should return real value', (done) => {
       httpClientSpy.get.and.returnValue(new Observable((observer)=>{
            observer.next([{"id":1,"name":"Chair","description":"Notes about brown Chair","imageURL":"chair.jpg"},{"id":2,"name":"Dining Table","description":"Notes about large dining table","imageURL":"dining.jpg"},{"id":3,"name":"Sofa","description":"Notes about brown Sofa","imageURL":"sofa.jpg"}])
       }))
      shoppingService.fetchShoppingCartItems().subscribe({
        next:(items)=>{
            expect(items).toBeDefined();
            expect(items.length).toBeGreaterThan(0);
            done();
        },
        error:()=>{done.fail("failed");}
      });
      expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
    });
  
    
  });