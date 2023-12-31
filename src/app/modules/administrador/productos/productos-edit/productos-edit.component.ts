import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../../../services/productos.service';
import { Productos } from '../../../../interfaces/productos.interface';

@Component({
  selector: 'app-productos-edit',
  templateUrl: './productos-edit.component.html',
  styleUrls: ['./productos-edit.component.css']
})
export class ProductosEditComponent implements OnInit {
  form: FormGroup;
  producto: Productos | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productosService: ProductosService
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipo: ['', Validators.required],
      precio: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.producto = history.state.productos; // Corregir el nombre de la propiedad

    // Inicializa el formulario con las validaciones
    this.form = this.formBuilder.group({
      nombre: [this.producto?.nombre || '', Validators.required],
      descripcion: [this.producto?.descripcion || '', Validators.required],
      tipo: [this.producto?.tipo || '', Validators.required],
      precio: [this.producto?.precio || '', Validators.required],
      image: [this.producto?.image || '', Validators.required]
    });
  }
  

  updateProducto(): void {
    if (this.form.invalid || !this.producto) {
      return;
      console.log("ERROR")
    }
  
    const updatedProduct: Productos = {
      id: this.producto.id,
      ...this.form.value
    };

    this.productosService.updatePlayer(updatedProduct)
      .then(() => {
        console.log('Producto actualizado');
        this.router.navigateByUrl('/list-producto');
      })
      .catch((error) => {
        console.error('Error al actualizar el producto', error);
      });
  }
}
