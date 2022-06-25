import { Component,Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/popup-producto.model';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.sass']
})
export class TarjetaProductoComponent implements OnInit {

  @Input() tarjetaProducto:Producto;

  constructor() { }

  ngOnInit(): void {
  }

}
