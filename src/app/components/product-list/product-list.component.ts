import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/models';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  constructor(private productService: ProductService){}

  products: Product[] = [];

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts()
    .then(products => this.products = products as Product[])
    .catch(error => console.log(error))
    ;
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id)
    .then(() => this.getAllProducts())  
    .catch(error => console.log(error))
    ;
  }



}
