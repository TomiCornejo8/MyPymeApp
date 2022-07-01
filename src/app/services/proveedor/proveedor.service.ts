import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from 'src/app/models/popup-proveedor.model';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  url:string = "http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  list():Observable<any>{
    let url = this.url + "api/proveedor/"
    return this.http.get(url);
  }

  post(proveedor:Proveedor):Observable<any>{
    let url = this.url + "api/proveedor/";
    let value = {"nombre":proveedor.nombre,"categoria":proveedor.categoria,"telefono":proveedor.telefono,"email":proveedor.email};
    return this.http.post(url,value);
  }

  put(proveedor:Proveedor):Observable<any>{
    let url = this.url + "api/proveedor/" + proveedor.id;
    let value = {"nombre":proveedor.nombre,"categoria":proveedor.categoria,"telefono":proveedor.telefono,"email":proveedor.email};
    return this.http.put(url,value);
  }

  delete(i:number):Observable<any>{
    let url = this.url + "api/proveedor/" + i;
    return this.http.delete(url);
  }
}