import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.sass']
})
export class RegistrarseComponent implements OnInit {
  
  registrarForm = new FormGroup({
    usuario:new FormControl('',Validators.required),
    clave:new FormControl('',Validators.required),
    claveRepetida:new FormControl('',Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }
  onRegistrar(form: any){
    console.log(form)
  }
}
