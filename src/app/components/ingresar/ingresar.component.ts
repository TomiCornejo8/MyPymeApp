import { Component, OnInit } from '@angular/core';
import { PymeService } from 'src/app/services/pyme/pyme.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.sass']
})
export class IngresarComponent implements OnInit {

  usuario:string = "";
  clave:string = "";

  constructor(private pymeService:PymeService) {
  }

  ngOnInit(): void {
  }
  
  ingresar(){
    if(this.usuario == "" || this.clave == ""){
      alert("Rellena todos los campos");
    }else{
      this.pymeService.get(this.usuario,this.clave).subscribe(data=>{
        if(data){
          sessionStorage.setItem('sitiomovil',JSON.stringify({"usuario":data.usuario}));
          window.location.href="/productos-screen";
        }else{
          alert("El nombre de usuario o contraseña no corresponden");
        }
      });
    }
  }
}
