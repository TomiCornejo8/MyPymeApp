import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ColeccionComponent } from './components/coleccion/coleccion.component';
import { ProductosScreenComponent } from './screens/productos-screen/productos-screen.component';
import { ProveedoresScreenComponent } from './screens/proveedores-screen/proveedores-screen.component';
import { VentasScreenComponent } from './screens/ventas-screen/ventas-screen.component';
import { GastosScreenComponent } from './screens/gastos-screen/gastos-screen.component';
import { TarjetaProductoComponent } from './components/tarjeta-producto/tarjeta-producto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { ListaComponent } from './components/lista/lista.component';
import { PopupProductoComponent } from './components/popup-producto/popup-producto.component';
import { PopupCategoriaComponent } from './components/popup-categoria/popup-categoria.component';
import { PopupInsumoComponent } from './components/popup-insumo/popup-insumo.component';
import { IngresarScreenComponent } from './screens/ingresar-screen/ingresar-screen.component';
import { RegistrarseScreenComponent } from './screens/registrarse-screen/registrarse-screen.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { NavbarInicioComponent } from './components/navbar-inicio/navbar-inicio.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { PopupProveedorComponent } from './components/popup-proveedor/popup-proveedor.component';
import { VentaComponent } from './components/venta/venta.component';
import {HttpClientModule} from '@angular/common/http';
import { ModalCategoriaProveedorComponent } from './components/modal-categoria-proveedor/modal-categoria-proveedor.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ColeccionComponent,
    ProductosScreenComponent,
    ProveedoresScreenComponent,
    VentasScreenComponent,
    GastosScreenComponent,
    TarjetaProductoComponent,
    CategoriaComponent,
    ProveedorComponent,
    ListaComponent,
    PopupProductoComponent,
    PopupCategoriaComponent,
    PopupInsumoComponent,
    IngresarScreenComponent,
    RegistrarseScreenComponent,
    InicioScreenComponent,
    NavbarInicioComponent,
    IngresarComponent,
    RegistrarseComponent,
    PopupProveedorComponent,
    VentaComponent,
    ModalCategoriaProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
