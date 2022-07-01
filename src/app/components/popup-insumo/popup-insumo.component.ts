import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Insumo } from 'src/app/models/popup-insumo.model';
import { Proveedor } from 'src/app/models/popup-proveedor.model';
import { InsumoService } from 'src/app/services/insumo/insumo.service';

@Component({
  selector: 'app-popup-insumo',
  templateUrl: './popup-insumo.component.html',
  styleUrls: ['./popup-insumo.component.sass']
})
export class PopupInsumoComponent implements OnInit {
  @Input() proveedor:Proveedor;

  nombreInsumo:string;
  precioInsumo:number;
  flag:boolean = false;

  constructor(private insumoService:InsumoService) { }

  ngOnInit(): void {
  }

  cancelar(){
    this.nombreInsumo = '';
    this.precioInsumo = 0;
    this.flag = false;
  }

  publicar(){
    this.insumoService.post(new Insumo(this.nombreInsumo,this.precioInsumo,this.proveedor.id)).subscribe(data=>{
      this.proveedor.insumos.push(data);
    });
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
