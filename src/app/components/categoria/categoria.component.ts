import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/models/popup-categoria.model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.sass']
})
export class CategoriaComponent implements OnInit {

  @Input() categoria:Categoria;
  @Output() categoriaX = new EventEmitter<Categoria>;
  @Output() editType = new EventEmitter<string>;
  @Output() get = new EventEmitter<number>;
  @Output() delete = new EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
  }

  selec(){
    this.categoriaX.emit(this.categoria);
  }

  editar(){
    this.editType.emit("Editar");
    this.get.emit(this.categoria.id);
  }

  eliminar(){
    this.delete.emit(this.categoria.id);
  }



}
