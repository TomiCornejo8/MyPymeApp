import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/popup-producto.model';

@Component({
  selector: 'app-popup-producto',
  templateUrl: './popup-producto.component.html',
  styleUrls: ['./popup-producto.component.sass']
})
export class PopupProductoComponent implements OnInit {

  @Output() subirProducto = new EventEmitter<Producto>();

  id:number = -1;
  nombre:string = '';
  stock:number = -1;
  precio:number = -1;
  ranking:number = -1;
  categoria:string = '';
  img:string = '';

  flag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cancelar(){
    this.nombre = '';
    this.stock = this.precio = -1;
  }

  publicar(){
    this.subirProducto.emit(new Producto(this.id,this.nombre,this.stock,this.precio,this.ranking,this.categoria,this.img));
    this.cancelar();
    this.flag = false;
  }
  // || this.categoria == ''
  camposLlenos(){
    if(this.nombre == '' || this.stock == -1 || this.precio == -1){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }

}
