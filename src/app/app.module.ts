import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ColeccionComponent } from './components/coleccion/coleccion.component';
import { ProductosScreenComponent } from './screens/productos-screen/productos-screen.component';
import { ProveedoresScreenComponent } from './screens/proveedores-screen/proveedores-screen.component';
import { VentasScreenComponent } from './screens/ventas-screen/ventas-screen.component';
import { GastosScreenComponent } from './screens/gastos-screen/gastos-screen.component';
import { FormsModule } from '@angular/forms';
import { TarjetaProductoComponent } from './components/tarjeta-producto/tarjeta-producto.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { ListaComponent } from './components/lista/lista.component';

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
    ProveedorComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
