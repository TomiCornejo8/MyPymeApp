import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insumo } from 'src/app/models/popup-insumo.model';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {
  
  url:string = "http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  get(i:number):Observable<any>{
    let url = this.url + "api/insumo/" + i;
    return this.http.get(url);
  }

  post(insumo:Insumo):Observable<any>{
    let url = this.url + "api/insumo/";
    let value = {"nombre":insumo.nombre,"precio":insumo.precio,"proveedor":insumo.proveedor};
    return this.http.post(url,value);
  }

  delete(i:number):Observable<any>{
    let url = this.url + "api/insumo/" + i;
    return this.http.delete(url);
  }
}
