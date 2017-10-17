import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = [];
  product = new Product;

  constructor( private _product: ProductService ) {
    this.products = this._product.getProducts();
  }

  ngOnInit() {
  }

  deleteProduct(index) {
    this.products = this._product.deleteProduct(index);
  }

  editProduct(myForm, index) {
    this._product.editProduct(this.product, index);
    this.products[index].on = true;
  }
  switch(index) {
    if (this.products[index].on === true) {
      this.products[index].on = false;
    }
    else {
      this.products[index].on = true;
    }
  }


}
