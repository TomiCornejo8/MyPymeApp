import { Component, Input, OnInit} from '@angular/core';
import { Producto } from 'src/app/models/popup-producto.model';
import { VentaComponent } from '../venta/venta.component';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {

  @Input() colaVenta:Producto[];


  constructor() { }

  ngOnInit(): void {
  }

  eliminarProducto(){
    delete this.colaVenta[1]
  }
  cancelarVenta(){
    
    this.colaVenta.forEach
  }

};

