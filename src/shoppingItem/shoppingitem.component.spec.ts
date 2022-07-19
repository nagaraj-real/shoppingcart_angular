import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCartService } from 'src/app/shoppingcart.service.';

import { ShoppingItemComponent } from './shoppingitem.component';

describe('ShoppingItemComponent', () => {
  let component: ShoppingItemComponent;
  let fixture: ComponentFixture<ShoppingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ ShoppingItemComponent ],
      providers:[ShoppingCartService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
