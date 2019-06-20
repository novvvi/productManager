import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct;
  errors;

  constructor(private _r: Router, private _hs: HttpService) { }

  ngOnInit() {
    this.newProduct = {
      title: "",
      price: 0.00,
      url: ""
    }
  }

  createProduct() {
    let obs = this._hs.addProduct(this.newProduct);
    obs.subscribe(data =>{
      if (data['msg'] == 'fail') {
        this.errors.push(data["errors"])
      }
      else {
        this._r.navigate(['/products']);
      }
    })
  }
}
