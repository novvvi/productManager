import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;

  constructor(private _r: Router, private _hs: HttpService) { }

  ngOnInit() {
    this.allProduct()
  }

  allProduct() {
    let obs = this._hs.getAllProducts();
    obs.subscribe(data => {
      this.products = data;
    })
  }

  deleteProduct(id) {
    let obs = this._hs.destroyProduct(id);
    obs.subscribe(data => {
      if (data['msg'] == 'success') {
        this._r.navigate(['/products'])
      }
    })
  }

}
