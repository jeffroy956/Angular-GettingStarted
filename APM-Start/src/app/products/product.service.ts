import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IProduct } from "./product";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import { HttpErrorResponse } from "@angular/common/http";
import { ObservableInput } from "rxjs/Observable";

@Injectable()
export class ProductService {

  private _productServiceUrl = "./api/products/products.json";

  constructor(private _http: HttpClient) {

  }

  getProducts(): Observable<IProduct[]> {
      return this._http.get<IProduct[]>(this._productServiceUrl)
        .do(data => console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError);
    }

  private handleError(err: HttpErrorResponse, caught: Observable<IProduct[]>) : ObservableInput<{}> {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
