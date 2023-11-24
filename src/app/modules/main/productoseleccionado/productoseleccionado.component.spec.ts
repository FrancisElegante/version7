import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoseleccionadoComponent } from './productoseleccionado.component';

describe('ProductoseleccionadoComponent', () => {
  let component: ProductoseleccionadoComponent;
  let fixture: ComponentFixture<ProductoseleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoseleccionadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoseleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
