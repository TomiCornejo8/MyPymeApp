import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.sass']
})
export class IngresarComponent implements OnInit {
  nombre:string='';
  clave:string='';

  ingresarForm = new FormGroup({
    usuario:new FormControl('',Validators.required),
    clave:new FormControl('',Validators.required),
  })

  constructor() { 
  }

  onIngresar(form: any){
    console.log(form)
  }

  ngOnInit(): void {
  }

}
