import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/models/popup-categoria.model';

@Component({
  selector: 'app-popup-categoria',
  templateUrl: './popup-categoria.component.html',
  styleUrls: ['./popup-categoria.component.sass']
})
export class PopupCategoriaComponent implements OnInit {

  @Output() subirCategoria = new EventEmitter<Categoria>();

  nombreCategoria:string = '';
  flag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cancelar(){
    this.nombreCategoria = '';
  }

  publicar(){
    this.subirCategoria.emit(new Categoria(this.nombreCategoria));
    this.cancelar();
    this.flag = false;
  }

  camposLlenos(){
    if(this.nombreCategoria == ''){
      this.flag = false;
    }else{
      this.flag = true;
    }
  }
}
