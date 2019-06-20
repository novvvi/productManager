import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProducts (){
    return this._http.get('/allProducts');
  };

  getOneProduct (id){
    return this._http.get(`/product/${id}`);
  };

  addProduct(data) {
    return this._http.post('/create', data);
  };

  updateProduct(data) {
    return this._http.put(`/update/product/${data._id}`, data);
  };

  destroyProduct(id) {
    return this._http.delete(`/destroy/product/${id}`);
  }
}
