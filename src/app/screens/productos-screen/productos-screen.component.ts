import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/popup-producto.model';

@Component({
  selector: 'app-productos-screen',
  templateUrl: './productos-screen.component.html',
  styleUrls: ['./productos-screen.component.sass']
})
export class ProductosScreenComponent implements OnInit {

  productos:Producto[] = [
    new Producto(1,"mayo",15,450,1,"aditivo","../../../assets/logoMiPymeApp.jpg")
  ];

  colaVenta:Producto[] = [];

  constructor() { }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('sitiomovil');
    if(!datos){
      window.location.href="/productos-screen";
    }
  }

  modalProducto(producto:Producto){
    this.productos.push(producto);
  }

  agregarVenta(producto:Producto){
    this.colaVenta.push(producto);
  }

}
