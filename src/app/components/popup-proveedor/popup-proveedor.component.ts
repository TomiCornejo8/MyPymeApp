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
  flag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  selecCategoria(value:string){
    this.categoriaX = value;
  }

  cancelar(){
    this.nombreProveedor = this.emailProveedor = this.telefonoProveedor ='';
    this.categoriaX = 'Categoria';
  }

  publicar(){
    //this.subirProveedor.emit(new Proveedor(0,this.nombreProveedor,this.emailProveedor,this.telefonoProveedor));
    this.cancelar();
    this.flag = false;
  }

  camposLlenos(){
    if(this.nombreProveedor == '' || this.emailProveedor == '' || this.telefonoProveedor == '' ||  this.categoriaX == 'Categoria'){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }
}
