import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoriaProveedor } from 'src/app/models/popup-categoriaProveedor.model';
import { Proveedor } from 'src/app/models/popup-proveedor.model';

@Component({
  selector: 'app-popup-proveedor',
  templateUrl: './popup-proveedor.component.html',
  styleUrls: ['./popup-proveedor.component.sass']
})
export class PopupProveedorComponent implements OnInit {

  @Input() categorias:CategoriaProveedor[];
  @Output() subirProveedor = new EventEmitter<Proveedor>();

  categoriaX:string = 'Categoria';

  nombreProveedor:string = '';
  emailProveedor:string = '';
  telefonoProveedor:string = '';
  categoriaFlag:boolean = false;
  flag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  selecCategoria(value:string){
    this.categoriaFlag = true;
    this.categoriaX = value;
    this.camposLlenos();
  }

  cancelar(){
    this.nombreProveedor = this.emailProveedor = this.telefonoProveedor ='';
    this.categoriaFlag = false;
    this.categoriaX = 'Categoria';
  }

  publicar(){
    this.subirProveedor.emit(new Proveedor(0,this.categoriaX,this.nombreProveedor,this.emailProveedor,this.telefonoProveedor,[]));
    this.cancelar();
    this.flag = false;
  }

  camposLlenos(){
    if(this.nombreProveedor == '' || this.emailProveedor == '' || this.telefonoProveedor == '' || this.categoriaFlag == false){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }
}
