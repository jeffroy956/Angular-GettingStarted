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
          //.do(data => console.log('All: ' + JSON.stringify(data)))
          .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
      } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return Observable.throw(errorMessage);
  }
}
