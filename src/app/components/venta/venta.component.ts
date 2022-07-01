import { Component, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/popup-producto.model';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.sass']
})
export class VentaComponent implements OnInit {

  @Input() venta:Producto;
  cont:number = 0;

  total:number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }
  // deleteItem(venta:Producto){
  //   this.ventas.splice(this.ventas.indexOf(venta),1);
  // }

}
