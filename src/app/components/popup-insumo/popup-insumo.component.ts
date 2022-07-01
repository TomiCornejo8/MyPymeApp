import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Insumo } from 'src/app/models/popup-insumo.model';

@Component({
  selector: 'app-popup-insumo',
  templateUrl: './popup-insumo.component.html',
  styleUrls: ['./popup-insumo.component.sass']
})
export class PopupInsumoComponent implements OnInit {

  @Output() subirInsumo = new EventEmitter<Insumo>();
  @Input() proveedor:number;

  nombreInsumo:string;
  precioInsumo:number;
  flag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cancelar(){
    this.nombreInsumo = '';
    this.precioInsumo = 0;
    this.flag = false;
  }

  publicar(){
    this.subirInsumo.emit(new Insumo(this.nombreInsumo,this.precioInsumo,this.proveedor));
    this.cancelar();
  }

  camposLlenos(){
    if(this.nombreInsumo == '' || this.precioInsumo == 0){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }

}
