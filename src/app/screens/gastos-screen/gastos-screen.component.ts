import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos-screen',
  templateUrl: './gastos-screen.component.html',
  styleUrls: ['./gastos-screen.component.sass']
})
export class GastosScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('sitiomovil');
    if(!datos){
      window.location.href="/productos-screen";
    }
  }

}
