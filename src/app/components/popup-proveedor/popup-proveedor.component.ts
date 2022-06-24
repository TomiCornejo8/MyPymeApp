import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Proveedor } from 'src/app/models/popup-proveedor.model';

@Component({
  selector: 'app-popup-proveedor',
  templateUrl: './popup-proveedor.component.html',
  styleUrls: ['./popup-proveedor.component.sass']
})
export class PopupProveedorComponent implements OnInit {

  @Output() subirProveedor = new EventEmitter<Proveedor>();

  nombreProveedor:string = '';
  emailProveedor:string = '';
  telefonoProveedor:string = '';
  flag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cancelar(){
    this.nombreProveedor = this.emailProveedor = this.telefonoProveedor ='';
  }

  publicar(){
    this.subirProveedor.emit(new Proveedor(this.nombreProveedor,this.emailProveedor,this.telefonoProveedor));
    this.cancelar();
    this.flag = false;
  }

  camposLlenos(){
    if(this.nombreProveedor == '' || this.emailProveedor == '' || this.telefonoProveedor == ''){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }
}
