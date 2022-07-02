import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  usuario:string = "";

  ngOnInit(): void {
    let datos = sessionStorage.getItem('sitiomovil');
    if(datos){
      let aux = JSON.parse(datos || "[]");
      this.usuario = aux.usuario;
    }else{
      this.usuario = "";
    }
  }

  cerrarSesion(){
    sessionStorage.clear();
  }

}
