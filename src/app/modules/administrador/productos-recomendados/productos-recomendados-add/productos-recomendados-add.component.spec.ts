import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosRecomendadosAddComponent } from './productos-recomendados-add.component';

describe('ProductosRecomendadosAddComponent', () => {
  let component: ProductosRecomendadosAddComponent;
  let fixture: ComponentFixture<ProductosRecomendadosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosRecomendadosAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosRecomendadosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
