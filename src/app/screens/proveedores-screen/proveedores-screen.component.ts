import { Component, OnInit } from '@angular/core';
import { CategoriaProveedor } from 'src/app/models/popup-categoriaProveedor.model';
import { Insumo } from 'src/app/models/popup-insumo.model';
import { Proveedor } from 'src/app/models/popup-proveedor.model';

@Component({
  selector: 'app-proveedores-screen',
  templateUrl: './proveedores-screen.component.html',
  styleUrls: ['./proveedores-screen.component.sass']
})
export class ProveedoresScreenComponent implements OnInit {

  categorias:CategoriaProveedor[] = [
    new CategoriaProveedor(1,"Lacteos"),
  ];

  proveedores:Proveedor[] = [
    new Proveedor(1,"Lacteos","Calo","Holo@gmail.com","+56 9 1234 5678",[
      new Insumo(1,"Queso",1200),
      new Insumo(2,"Queso crema",1200),
      new Insumo(3,"Queso granulado",1200),
    ]),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  agregarProveedor(proveedor:Proveedor){
    this.proveedores.push(proveedor);
  }
}
