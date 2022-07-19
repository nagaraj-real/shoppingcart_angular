import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCartService } from 'src/app/shoppingcart.service.';

import { ShoppinglistComponent } from './shoppinglist.component';

describe('ShoppinglistComponent', () => {
  let component: ShoppinglistComponent;
  let fixture: ComponentFixture<ShoppinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ ShoppinglistComponent ],
      providers:[ShoppingCartService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
