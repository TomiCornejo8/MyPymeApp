import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/popup-producto.model';

@Component({
  selector: 'app-popup-producto',
  templateUrl: './popup-producto.component.html',
  styleUrls: ['./popup-producto.component.sass']
})
export class PopupProductoComponent implements OnInit {

  @Output() subirProducto = new EventEmitter<Producto>();

  id:number = 1;
  nombre:string = '';
  stock:number = 0;
  precio:number = 0;
  ranking:number = 0;
  categoria:string = '';
  img:string = '';

  flag:boolean = false;

  

  constructor() { }

  ngOnInit(): void {
  }

  cancelar(){
    this.nombre = '';
    this.stock = this.precio = 0;
  }

  publicar(){
    this.subirProducto.emit(new Producto(this.id,this.nombre,this.stock,this.precio,this.ranking,this.categoria,this.img));
    this.cancelar();
    this.flag = false;
  }
  // || this.categoria == ''
  camposLlenos(){
    if(this.nombre == '' || this.stock == 0 || this.precio == 0){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }

}
