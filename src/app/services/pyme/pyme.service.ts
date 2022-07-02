import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pyme } from 'src/app/models/pyme.model';

@Injectable({
  providedIn: 'root'
})
export class PymeService {
  url:string = "http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  get(usuario:string,clave:string):Observable<any>{
    let url = this.url + "api/pyme/" + usuario + "/" + clave;
    return this.http.get(url);
  }

  post(usuario:string,clave:string,icono:string = ""):Observable<any>{
    let url = this.url + "api/pyme/";
    let value = {"usuario":usuario,"clave":clave,"icono":icono};
    return this.http.post(url,value);
  }

  // put(pyme:Pyme):Observable<any>{
  //   let url = this.url + "api/pyme/" + pyme.id;
  //   let value = {"nombre":pyme.nombre,"categoria":pyme.categoria,"telefono":pyme.telefono,"email":pyme.email};
  //   return this.http.put(url,value);
  // }

  // delete(i:number):Observable<any>{
  //   let url = this.url + "api/pyme/" + i;
  //   return this.http.delete(url);
  // }
}
