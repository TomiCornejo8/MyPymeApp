import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Insumo } from 'src/app/models/popup-insumo.model';

@Component({
  selector: 'app-popup-insumo',
  templateUrl: './popup-insumo.component.html',
  styleUrls: ['./popup-insumo.component.sass']
})
export class PopupInsumoComponent implements OnInit {

  @Output() subirInsumo = new EventEmitter<Insumo>();

  nombreInsumo:string = '';
  precioInsumo:number = -1;
  flag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cancelar(){
    this.nombreInsumo = '';
    this.precioInsumo = -1;
  }

  publicar(){
    this.subirInsumo.emit(new Insumo(this.nombreInsumo,this.precioInsumo));
    this.cancelar();
    this.flag = false;
  }

  camposLlenos(){
    if(this.nombreInsumo == '' || this.precioInsumo == -1){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }

}
