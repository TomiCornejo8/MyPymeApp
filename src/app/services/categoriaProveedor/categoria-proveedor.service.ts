import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/popup-categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaProveedorService {
  url:string = "http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  list():Observable<any>{
    let url = this.url + "api/categoriaproveedor/"
    return this.http.get(url);
  }

  post(categoriaProveedor:Categoria):Observable<any>{
    let url = this.url + "api/categoriaproveedor/";
    let value = {"categoria":categoriaProveedor.categoria};
    return this.http.post(url,value);
  }

  put(categoriaProveedor:Categoria):Observable<any>{
    let url = this.url + "api/categoriaproveedor/" + categoriaProveedor.id;
    return this.http.put(url,categoriaProveedor);
  }

  delete(i:number):Observable<any>{
    let url = this.url + "api/categoriaproveedor/" + i;
    return this.http.delete(url);
  }
}
