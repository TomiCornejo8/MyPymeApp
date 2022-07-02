import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url:string = "http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  list():Observable<any>{
    let url = this.url + "api/producto/"
    return this.http.get(url);
  }
}
