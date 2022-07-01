import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Insumo } from 'src/app/models/popup-insumo.model';
import { Proveedor } from 'src/app/models/popup-proveedor.model';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.sass']
})
export class ProveedorComponent implements OnInit {

  @Input() proveedor:Proveedor;
  @Output() editType =  new EventEmitter<string>();
  @Output() getProveedor =  new EventEmitter<number>();
  @Output() deleteProveedor = new EventEmitter<number>();
  insumoFlag:boolean = false;

  constructor() { }
  
  ngOnInit(): void {
  }

  insumoBtn(){
    if(this.insumoFlag){
      this.insumoFlag = false;
    }else{
      this.insumoFlag = true;
    }
  }

  delete(){
    this.deleteProveedor.emit(this.proveedor.id);
  }

  edit(){
    this.editType.emit("Editar");
    this.getProveedor.emit(this.proveedor.id);
  }
}
