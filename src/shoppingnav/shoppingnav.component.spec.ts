import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ShoppingnavComponent } from './shoppingnav.component';

describe('ShoppingnavComponent', () => {
  let component: ShoppingnavComponent;
  let fixture: ComponentFixture<ShoppingnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterTestingModule],
      declarations: [ ShoppingnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
