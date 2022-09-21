import { Component,EventEmitter,Input, OnInit,Output } from '@angular/core';
import { Producto } from 'src/app/models/popup-producto.model';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.sass']
})
export class TarjetaProductoComponent implements OnInit {

  @Input() tarjetaProducto:Producto;
  @Output() nombreProductoEliminar=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  eliminarProducto(nombre:string){
    this.nombreProductoEliminar.emit(nombre);
  }
}
