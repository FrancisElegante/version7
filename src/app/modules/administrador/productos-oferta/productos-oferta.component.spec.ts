import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosOfertaComponent } from './productos-oferta.component';

describe('ProductosOfertaComponent', () => {
  let component: ProductosOfertaComponent;
  let fixture: ComponentFixture<ProductosOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosOfertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
