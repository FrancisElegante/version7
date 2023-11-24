import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { MainComponent } from "../app/modules/main/main.component";
import { LoginComponent } from "../app/modules/autenticacion/login/login.component";
import { RegisterComponent } from "../app/modules/autenticacion/register/register.component";
import { CarritoComponent } from "../app/modules/main/carrito/carrito.component";
import { UsuarioComponent } from "../app/modules/usuario/usuario.component";
import { DatosComponent } from "../app/modules/usuario/datos/datos.component";
import { DireccionComponent } from "../app/modules/usuario/direccion/direccion.component";
import { ContrasenaComponent } from "../app/modules/usuario/contrasena/contrasena.component";
import { ProductosComponent } from "../app/modules/administrador/productos/productos.component";
import { ProductosEditComponent } from "../app/modules/administrador/productos/productos-edit/productos-edit.component";
import { ProductosAddComponent } from "../app/modules/administrador/productos/productos-add/productos-add.component";
import { GestionComponent } from "../app/modules/administrador/gestion/gestion.component";
import { AdministradorComponent } from './modules/administrador/administrador.component';
import { VentasComponent } from './modules/administrador/ventas/ventas.component';
import { ProductoseleccionadoComponent } from './modules/main/productoseleccionado/productoseleccionado.component';
import { ProductosOfertaComponent } from './modules/administrador/productos-oferta/productos-oferta.component';
import { ProductosOfertaAddComponent } from './modules/administrador/productos-oferta/productos-oferta-add/productos-oferta-add.component';
import { ProductosRecomendadosComponent } from './modules/administrador/productos-recomendados/productos-recomendados.component';
import { ProductosRecomendadosAddComponent } from './modules/administrador/productos-recomendados/productos-recomendados-add/productos-recomendados-add.component';
import { FooterComponent } from './modules/footer/footer.component';

const redirectUnauthorizedToRegister = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', component: MainComponent, ...canActivate(redirectUnauthorizedToRegister) },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'webcarrito', component: CarritoComponent,  ...canActivate(redirectUnauthorizedToRegister)},
  { path: 'usuario', component: UsuarioComponent , ...canActivate(redirectUnauthorizedToRegister)},
  { path: 'misdatos', component: DatosComponent,  ...canActivate(redirectUnauthorizedToRegister) },
  { path: 'direccion', component: DireccionComponent },
  { path: 'seguridad', component: ContrasenaComponent },
  { path: 'add-producto', component: ProductosAddComponent },
  { path: 'edit-producto', component: ProductosEditComponent },
  { path: 'list-producto', component: ProductosComponent },
  { path: 'gestion', component: GestionComponent },
  { path: 'administracion', component: AdministradorComponent },
  { path: 'gestionventas', component: VentasComponent },
  { path: 'producto/:id', component: ProductoseleccionadoComponent },
  { path: 'gestionofertas', component: ProductosOfertaComponent },
  { path: 'add-oferta', component: ProductosOfertaAddComponent },
  { path: 'gestionrecomendados', component: ProductosRecomendadosComponent },
  { path: 'add-recomendado', component: ProductosRecomendadosAddComponent },
  { path: 'footer', component: FooterComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
