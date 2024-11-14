import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../custom/CustomValidators';
import { Product } from '../../../models/models';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {

  productForm!: FormGroup;
  constructor(private productService: ProductService,private router: Router){}


  ngOnInit(): void {

    this.productForm = new FormGroup({
      name: new FormControl('', [ Validators.required, CustomValidators.lettersOnly() ]),
      description: new FormControl('', [ Validators.required,Validators.minLength(10)]),
      price: new FormControl('', [ Validators.required, Validators.min(0)]),
      productCategory: new FormControl('',[ Validators.required,CustomValidators.numbersOnly()])
    });
  }


  addProduct(){
    let product = new Product();
    product.description = this.productForm.value.description;
    product.name = this.productForm.value.name;
    product.price = this.productForm.value.price;
    product.productCategoryId = this.productForm.value.productCategory;
    
    console.log(product);



    this.productService.addProduct(product)
    .then(response => {
      alert("Producto agregado correctamente");
      this.productForm.reset();
      this.productForm.markAsPristine();
      this.productForm.markAsUntouched();
      this.router.navigate(['/products']);
  }
)
    .catch(error =>{
      alert("Error al añadir el producto");
    } );
  }

}
