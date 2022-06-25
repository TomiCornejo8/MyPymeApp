import { Component, Input, OnInit } from '@angular/core';
import { Insumo } from 'src/app/models/popup-insumo.model';
import { Proveedor } from 'src/app/models/popup-proveedor.model';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.sass']
})
export class ProveedorComponent implements OnInit {

  @Input() proveedor:Proveedor;
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
}
