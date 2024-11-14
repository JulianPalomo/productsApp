import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../models/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  product = new Product();

  constructor(private productService: ProductService, private route: ActivatedRoute){}


  ngOnInit() {
    let productId = Number(this.route.snapshot.paramMap.get('productId'));
    
    this.productService.getProductById(productId)
      .then(response => {
        this.product = response as Product;
      })
      .catch(error => {
        console.log(error);
      })
  }
}
