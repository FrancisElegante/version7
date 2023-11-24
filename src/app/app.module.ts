
//Imports modulos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { RegisterComponent } from './modules/autenticacion/register/register.component';
import { LoginComponent } from './modules/autenticacion/login/login.component';
import { DatosComponent } from './modules/usuario/datos/datos.component';
import { ContrasenaComponent } from './modules/usuario/contrasena/contrasena.component';
import { MainComponent } from './modules/main/main.component';
import { CarritoComponent } from './modules/main/carrito/carrito.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { DireccionComponent } from './modules/usuario/direccion/direccion.component';
import { AdministradorComponent } from './modules/administrador/administrador.component';
import { ProductosComponent } from './modules/administrador/productos/productos.component';
import { CuentasComponent } from './modules/administrador/cuentas/cuentas.component';
import { GestionComponent } from './modules/administrador/gestion/gestion.component';
import { ProductosEditComponent } from './modules/administrador/productos/productos-edit/productos-edit.component';
import { ProductosAddComponent } from './modules/administrador/productos/productos-add/productos-add.component';
import { VentasComponent } from './modules/administrador/ventas/ventas.component';
import { ProductoseleccionadoComponent } from './modules/main/productoseleccionado/productoseleccionado.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ProductosOfertaComponent } from './modules/administrador/productos-oferta/productos-oferta.component';
import { ProductosOfertaAddComponent } from './modules/administrador/productos-oferta/productos-oferta-add/productos-oferta-add.component';
import { ProductosRecomendadosComponent } from './modules/administrador/productos-recomendados/productos-recomendados.component';
import { ProductosRecomendadosAddComponent } from './modules/administrador/productos-recomendados/productos-recomendados-add/productos-recomendados-add.component';


//Imports
import { NgModule } from '@angular/core'; //importado
import { BrowserModule } from '@angular/platform-browser'; //importado
import { importProvidersFrom } from '@angular/core'; //importado
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { FormsModule,ReactiveFormsModule, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './modules/footer/footer.component';
import { AutenticacionComponent } from './modules/restaurante/autenticacion/autenticacion.component';
import { CarruselComponent } from './modules/carrusel/carrusel.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RegisterComponent,
    LoginComponent,
    DatosComponent,
    ContrasenaComponent,
    MainComponent,
    CarritoComponent,
    NavbarComponent,
    DireccionComponent,
    AdministradorComponent,
    ProductosComponent,
    CuentasComponent,
    GestionComponent,
    ProductosEditComponent,
    ProductosAddComponent,
    VentasComponent,
    ProductoseleccionadoComponent,
    ProductosOfertaComponent,
    ProductosOfertaAddComponent,
    ProductosRecomendadosComponent,
    ProductosRecomendadosAddComponent,
    FooterComponent,
    AutenticacionComponent,
    CarruselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FontAwesomeModule,
    provideStorage(() => getStorage()),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
