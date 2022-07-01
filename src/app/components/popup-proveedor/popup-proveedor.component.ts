import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/models/popup-categoria.model';
import { Proveedor } from 'src/app/models/popup-proveedor.model';

@Component({
  selector: 'app-popup-proveedor',
  templateUrl: './popup-proveedor.component.html',
  styleUrls: ['./popup-proveedor.component.sass']
})
export class PopupProveedorComponent implements OnInit {

  @Input() categorias:Categoria[];
  @Input() type:string;
  @Output() addProveedor = new EventEmitter<Proveedor>();
  @Output() editProveedor = new EventEmitter<Proveedor>();

  categoriaX:Categoria;

  @Input() nombreProveedor:string = '';
  @Input() emailProveedor:string = '';
  @Input() telefonoProveedor:string = '';
  categoriaFlag:boolean = false;
  flag:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.categoriaX = new Categoria("Categoría");
  }

  selecCategoria(value:Categoria){
    this.categoriaFlag = true;
    this.categoriaX.categoria = value.categoria;
    this.categoriaX.id = value.id;
    this.camposLlenos();
  }

  cancelar(){
    if(this.type == "Agregar"){
      this.nombreProveedor = this.emailProveedor = this.telefonoProveedor ='';
    }
    this.categoriaFlag = false;
    this.categoriaX.categoria = 'Categoria';
  }

  publicar(){
    if(this.type == 'Agregar'){
      this.addProveedor.emit(new Proveedor(this.categoriaX.id,this.nombreProveedor,this.emailProveedor,this.telefonoProveedor));
      this.cancelar();
    }else{
      this.editProveedor.emit(new Proveedor(this.categoriaX.id,this.nombreProveedor,this.emailProveedor,this.telefonoProveedor));
      this.cancelar();
    }
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
