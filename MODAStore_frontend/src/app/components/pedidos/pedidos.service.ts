import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pedido } from './pedidos';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private url:string="http://localhost:8083/pedidos";

  constructor(private http:HttpClient) { }

  // OBTENER TODOS LOS PEDIDOS
  getAll():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.url);
  }

  // OBTENER UN PEDIDO POR ID
  get(id:number):Observable<Pedido>{
    return this.http.get<Pedido>(this.url+'/'+id);
  }

  // ACTUALIZAR UN PEDIDO
  update(pedido:Pedido):Observable<Pedido>{
    return this.http.put<Pedido>(this.url, pedido);
  }

  // ELIMINAR UN PEDIDO
  delete(id:number):Observable<Pedido>{
    return this.http.delete<Pedido>(this.url+'/'+id);
  }

  // CREAR UN PEDIDO
  create(pedido:Pedido):Observable<Pedido>{
    return this.http.post<Pedido>(this.url, pedido);
  }


}
