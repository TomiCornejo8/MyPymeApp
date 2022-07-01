import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosScreenComponent } from './screens/productos-screen/productos-screen.component';
import { GastosScreenComponent } from './screens/gastos-screen/gastos-screen.component';
import { ProveedoresScreenComponent } from './screens/proveedores-screen/proveedores-screen.component';
import { VentasScreenComponent } from './screens/ventas-screen/ventas-screen.component';
import { InicioScreenComponent } from './screens/inicio-screen/inicio-screen.component';
import { IngresarScreenComponent } from './screens/ingresar-screen/ingresar-screen.component';
import { RegistrarseScreenComponent } from './screens/registrarse-screen/registrarse-screen.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio-screen', pathMatch:'full'},
  {path:'productos-screen', component:ProductosScreenComponent},
  {path:'gastos-screen', component:GastosScreenComponent},
  {path:'proveedores-screen', component:ProveedoresScreenComponent},
  {path:'ventas-screen', component:VentasScreenComponent},
  {path:'inicio-screen', component:InicioScreenComponent},
  {path:'ingresar-screen', component:IngresarScreenComponent},
  {path:'registrarse-screen', component:RegistrarseScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
