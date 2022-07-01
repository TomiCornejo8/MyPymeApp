import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-screen',
  templateUrl: './ingresar-screen.component.html',
  styleUrls: ['./ingresar-screen.component.sass']
})
export class IngresarScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('sitiomovil');
    if(datos){
      window.location.href="/productos-screen";
    }
  }

}
