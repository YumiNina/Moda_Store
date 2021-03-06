import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url:string="http://localhost:8083/producto";

  constructor(private http:HttpClient) { }

  // OBTENER TODOS LOS PRODUCTOS
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  // OBTENER UN PRODUCTO POR ID
  get(id:number):Observable<Product>{
    return this.http.get<Product>(this.url+'/'+id);
  }

}
