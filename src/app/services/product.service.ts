import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL = 'https://utn-lubnan-api-2.herokuapp.com/api/Product';

  constructor(private http: HttpClient) { }


  getAllProducts(){
    return this.http.get(this.apiURL).toPromise();
  }

  getProductById(id: number){
    return this.http.get(this.apiURL + '/' + id).toPromise();
  }

  deleteProduct(id: number){
    return this.http.delete(this.apiURL + '/' + id).toPromise();
  }

  addProduct(product: any){
    return this.http.post(this.apiURL, product).toPromise();
  }


}
