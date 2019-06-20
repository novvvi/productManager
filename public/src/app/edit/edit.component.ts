import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editProduct;
  errors;
  editID;

  constructor(private _ar: ActivatedRoute,private _r: Router, private _hs: HttpService) { }

  ngOnInit() {
    this._ar.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.editID = params['id'];
    });
    this.editProduct = {
      _id: this.editID,
      title: "",
      price: 0.00,
      url: ""
    }
    
  }
  changeProduct() {
    let obs = this._hs.updateProduct(this.editProduct);
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
