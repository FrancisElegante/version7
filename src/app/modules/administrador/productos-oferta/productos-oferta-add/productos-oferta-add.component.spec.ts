import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosOfertaAddComponent } from './productos-oferta-add.component';

describe('ProductosOfertaAddComponent', () => {
  let component: ProductosOfertaAddComponent;
  let fixture: ComponentFixture<ProductosOfertaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosOfertaAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosOfertaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
