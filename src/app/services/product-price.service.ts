import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

import { ProductPrice } from "../interfaces/product-price";

import { Config } from "../interfaces/config";
import { HttpClientConfigService } from "./http-config.service";

@Injectable({
  providedIn: 'root'
})

export class ProductPriceService {

    productServices : ProductPriceService[] | undefined;

    constructor (private http: HttpClient, private configService: HttpClientConfigService) {}

    getProductPrices() : Observable<ProductPrice[]> {
        return this.http.get<ProductPrice[]>(`http://127.0.0.1:8000/api/product/all`);
    }
    

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
      }
}