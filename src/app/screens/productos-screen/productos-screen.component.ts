import { Component, Input, OnInit, SimpleChanges,OnChanges } from '@angular/core';
import { Producto } from 'src/app/models/popup-producto.model';
// import listaProducto from 'src/assets/json/post.json';

@Component({
  selector: 'app-productos-screen',
  templateUrl: './productos-screen.component.html',
  styleUrls: ['./productos-screen.component.sass']
})
export class ProductosScreenComponent implements OnInit {

  productos:Producto[] = [
    new Producto(1,"mayo",15,450,1,"aditivo","../../../assets/logoMiPymeApp.jpg")
  ];
  constructor() { }

  ngOnInit(): void {

  }
  
  modalProducto(producto:Producto){
    this.productos.push(producto);
  }
  eliminarProducto(nombre:string){
    for(let i=0;i<this.productos.length;i++){
      if(this.productos[i].nombre===nombre){
        this.productos.splice(i,1);
      }
    }
  }
}
