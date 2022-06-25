import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/models/popup-categoria.model';

@Component({
  selector: 'app-popup-categoria',
  templateUrl: './popup-categoria.component.html',
  styleUrls: ['./popup-categoria.component.sass']
})
export class PopupCategoriaComponent implements OnInit {

  @Output() subirCategoria = new EventEmitter<Categoria>();

  id:number = -1;
  nombre:string = '';
  flag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cancelar(){
    this.id = -1;
    this.nombre = '';
  }

  publicar(){
    this.subirCategoria.emit(new Categoria(this.id,this.nombre));
    this.cancelar();
    this.flag = false;
  }

  camposLlenos(){
    if(this.id == -1 || this.nombre == ''){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }
}
