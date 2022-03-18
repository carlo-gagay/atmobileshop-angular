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
        return this.http.get<ProductPrice[]>(`http://localhost:8012/api/product-prices`);
    }

}