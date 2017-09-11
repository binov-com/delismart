import { Product } from './../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../product/product.service';
import { CategoryService } from './../../category/category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'; // unsubscripe after take the value(s)

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$;
  id;
  product: Product = { $key: '', title: '', price: 0, category: '', imageUrl: '' }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productService: ProductService) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
   }

  save(product) {
    if(this.id) this.productService.update(this.id, product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if(!confirm('Êtes vous sûr de la suppression de ce produit ?')) return;
  
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }
  
}
