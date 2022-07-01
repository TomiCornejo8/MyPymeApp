import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Insumo } from 'src/app/models/popup-insumo.model';
import { Proveedor } from 'src/app/models/popup-proveedor.model';
import { InsumoService } from 'src/app/services/insumo/insumo.service';

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

  constructor(private insumoService:InsumoService) { }
  
  ngOnInit(): void {
    this.listInsumos();
  }

  listInsumos(){
    this.insumoService.get(this.proveedor.id).subscribe(data =>{
      console.log(data);
      this.proveedor.insumos = data;
    });
  }

  deleteInsumo(id:number){
    this.insumoService.delete(id).subscribe(data=>{
      console.log(data);
    });
    let array = this.proveedor.insumos.filter(function (insumo) { return insumo.id == id; });
    let insumo = array[0];
    this.proveedor.insumos.splice(this.proveedor.insumos.indexOf(insumo),1);
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

  agregarInsumo(){
    
  }
}
