import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/models/popup-categoria.model';

@Component({
  selector: 'app-modal-categoria-proveedor',
  templateUrl: './modal-categoria-proveedor.component.html',
  styleUrls: ['./modal-categoria-proveedor.component.sass']
})
export class ModalCategoriaProveedorComponent implements OnInit {  
  @Input() type:string;
  @Input() categoria:string;

  checkFlag:boolean = false;

  @Output() addCategoria = new EventEmitter<Categoria>();
  @Output() editCategoria = new EventEmitter<Categoria>();

  constructor() { }

  ngOnInit(): void {
  }

  checkText(){
    if(this.type == 'Agregar'){
      if(this.categoria == ''){
        this.checkFlag = false;
      }else{
        this.checkFlag = true;
      }
    }else{
      if(this.categoria == ''){
        this.checkFlag = false;
      }else{
        this.checkFlag = true;
      }
    }
  }

  cancel(){
    if(this.type == 'Agregar'){
      this.categoria = '';
    }
    this.checkFlag = false;
  }

  submit(){
    if(this.type == 'Agregar'){
      this.addCategoria.emit(new Categoria(this.categoria));
      this.cancel();
    }else{
      this.editCategoria.emit(new Categoria(this.categoria));
      this.cancel();
    }
  }
}
