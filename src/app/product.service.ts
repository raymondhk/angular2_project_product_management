import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
  products = [
    { title: 'IPhone X', price: 1000, img_url: './../assets/img/iphone_x.jpeg', on: true },
    { title: 'MacBook Pro', price: 1300, img_url: './../assets/img/macbookpro.jpg', on: true },
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    this.products.push(product);
    console.log(this.products);
  }

  deleteProduct(index) {
    this.products.splice(index, 1);
    return this.products;
  }

  editProduct(product, index) {
    this.products.splice(index, 1, product);
    return this.products;
  }
}
