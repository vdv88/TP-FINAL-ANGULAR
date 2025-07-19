import { Component, inject } from '@angular/core';
import { ProductInterface, ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, RouterModule, MatBadgeModule, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule, MatButtonToggleModule, MatListModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products : ProductInterface[] = [];
  filteredProducts: ProductInterface[] = [];
  loading : boolean = true;
  search: string = '';
  viewMode: string = 'cards';
  private productsService = inject(ProductsService);
  ngOnInit(){
    const products_observable = this.productsService.getProducts();
    products_observable.subscribe(
      {
        next: (products) => {
            this.products = products;
            this.filteredProducts = products;
            this.loading = false;
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }
  trackByFn(index: number, item: ProductInterface) {
    return item.id;
  }
  onSearch() {
    const term = this.search.toLowerCase();
    this.filteredProducts = this.products.filter(p =>
      p.nombre_barrio.toLowerCase().includes(term) ||
      p.location.toLowerCase().includes(term) ||
      (p.tags && p.tags.some(tag => tag.toLowerCase().includes(term)))
    );
  }
  setViewMode(mode: string) {
    this.viewMode = mode;
  }
}

