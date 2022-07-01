import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas-screen',
  templateUrl: './ventas-screen.component.html',
  styleUrls: ['./ventas-screen.component.sass']
})
export class VentasScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let datos = sessionStorage.getItem('sitiomovil');
    if(!datos){
      window.location.href="/productos-screen";
    }
  }

}
