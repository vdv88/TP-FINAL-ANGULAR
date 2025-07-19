import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, ProductInterface } from '../services/products.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatCardModule, 
    MatIconModule, 
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class ProductDetail {
  product: ProductInterface | null = null;
  loading = true;
  error: string | null = null;
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getProductById(id).subscribe({
      next: (product) => {
        this.product = product || null;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar el producto';
        this.loading = false;
      }
    });
  }
}
