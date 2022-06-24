import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/popup-producto.model';

@Component({
  selector: 'app-popup-producto',
  templateUrl: './popup-producto.component.html',
  styleUrls: ['./popup-producto.component.sass']
})
export class PopupProductoComponent implements OnInit {

  @Output() subirProducto = new EventEmitter<Producto>();

  nombreProducto:string = '';
  stockProducto:number = -1;
  precioProducto:number = -1;
  flag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cancelar(){
    this.nombreProducto = '';
    this.stockProducto = this.precioProducto = -1;
  }

  publicar(){
    this.subirProducto.emit(new Producto(this.nombreProducto,this.stockProducto,this.precioProducto));
    this.cancelar();
    this.flag = false;
  }

  camposLlenos(){
    if(this.nombreProducto == '' || this.stockProducto == -1 || this.precioProducto == -1){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }

}
