import { Component, OnInit } from '@angular/core';
import { ProductsService, ProductInterface } from '../services/products.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, RouterModule, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  nombre = 'pedro';
  contador = 0;
  productos: ProductInterface[] = [];
  loading: boolean = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next: (products: ProductInterface[]) => {
        this.productos = products.slice(0, 3);
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Error al cargar productos', error);
        this.loading = false;
      }
    });
  }

  saludar() {
    alert('Hola a todos');
  }
  incrementar() {
    this.contador = this.contador + 1;
  }
  mostrarPorConsola() {
    console.log('Contador vale: ' + this.contador);
  }
  trackById(index: number, item: ProductInterface) {
    return item.id;
  }
}
