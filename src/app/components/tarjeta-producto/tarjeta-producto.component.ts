import { Component, Input, OnInit, EventEmitter,Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from 'src/app/models/popup-producto.model';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.sass']
})
export class TarjetaProductoComponent implements OnInit {

  @Input() tarjetaProducto:Producto;

  @Output() venta = new EventEmitter<Producto>();

  constructor() { }

  ngOnInit(): void {
  }

  carrito(){
    this.venta.emit(this.tarjetaProducto);
  }
}
