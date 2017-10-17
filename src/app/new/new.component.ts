import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import { ProductService } from './../product.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product = new Product();

  constructor( private _product: ProductService ) { }

  ngOnInit() {
  }

  addProduct(myForm) {
    this._product.addProduct(this.product);
    this.product = new Product;
    myForm.reset();
    myForm.form.markAsPristine();
    myForm.form.markAsUntouched();
  }

}
