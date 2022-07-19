import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCheckoutComponent } from './shoppingcheckout.component';


describe('ShoppingCheckoutComponent', () => {
  let component: ShoppingCheckoutComponent;
  let fixture: ComponentFixture<ShoppingCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ ShoppingCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
