import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IProduct } from '../catalog/product.model';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;

    component.product = {
      name: 'Sample Robot Part',
      description: 'A sample description of the robot part.',
      category: 'Actuator',
      price: 100,
      discount: 0.1,
      imageName: 'sample-robot-part.jpg'
    } as IProduct;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
