import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAllComponent } from './products-all.component';

describe('ProductsComponent', () => {
  let component: ProductsAllComponent;
  let fixture: ComponentFixture<ProductsAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsAllComponent]
    });
    fixture = TestBed.createComponent(ProductsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
