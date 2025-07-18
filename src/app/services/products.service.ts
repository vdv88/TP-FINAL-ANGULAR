import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


export interface ProductInterface {
  id: number;
  nombre_barrio: string;
  title: string;
  image: string;
  location: string;
  monto_obra: number;
  nuevo_monto_obra: number;
  fecha_inicio: Date;
  fecha_fin: Date;
  status: string;
  url: string;
  category: string;
  thumnails: string;
  tags: string[];
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsURL = '/products.json'
  constructor(private http : HttpClient) {}

  getProducts () : Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.productsURL)
  }

  getProductById(product_id : number): Observable<ProductInterface | undefined>{
    return this.http.get<ProductInterface[]>(this.productsURL).pipe(
      map(products => products.find(product => product.id === product_id))
    )
  }
}
