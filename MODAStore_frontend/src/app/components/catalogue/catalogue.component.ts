import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';
import { Product } from './product';
import { Categoria } from '../categorias/categoria';
import { CategoriaService } from '../categorias/categoria.service';
import { Options, LabelType } from 'ng5-slider';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})


 export class CatalogueComponent implements OnInit{

  minValue: number = 50;
  maxValue: number = 400;

  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
        switch (label) {
        case LabelType.Low:
          this.minValue = value;
          this.filterPrecio[0]=this.minValue;
          console.log(this.filterPrecio);
          return '<b>Min price:</b> Bs.' + value;
        case LabelType.High:
          this.maxValue= value;
          this.filterPrecio[1]=this.maxValue;
          console.log(this.filterPrecio);
          return '<b>Max price:</b> Bs.' + value;
          
        default:
 
          return 'Bs.' + value;
      }
    }
  };

  filterPost='';
  filterCategoria='';
  filterPrecio:number[]=[];

  product: any[] = [];
  categoria: Array<Categoria>=[];

  constructor (private http: HttpClient){
    this.filterPrecio[0]=this.minValue;
    this.filterPrecio[1]=this.maxValue;
    
    this.http.get('http://localhost:8083/producto')
    .subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
      }
    )
    this.http.get('http://localhost:8083/categoria')
    .subscribe((data: any) => {
      this.categoria = data;
      console.log(this.categoria);
      }
    )
  }
  ngOnInit(): void {
  }

 }




