import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PymeService } from 'src/app/services/pyme/pyme.service';
// import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.sass']
})
export class RegistrarseComponent implements OnInit {

  usuario:string;
  clave1:string;
  clave2:string;

  constructor(private pymeService:PymeService) { }

  ngOnInit(): void {
  }

  registrar(){
    if(this.usuario == "" || this.clave1 == "" || this.clave2 == ""){
      alert("Llena todos los campos")
    }else if(this.clave1 != this.clave2){
      alert("Contraseñas diferentes, intentalo de nuevo");
    }else{
      this.pymeService.post(this.usuario,this.clave1).subscribe(data =>{
        console.log(data);
        sessionStorage.setItem('sitiomovil',JSON.stringify({"usuario":this.usuario}));
        window.location.href="/productos-screen";
      });
    }
  }
}
