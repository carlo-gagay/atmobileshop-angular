import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LogoService {

    constructor() {}

    getLogo() : Observable<String> {
        return of("http://localhost:4200/assets/images/logo1.png");
    }

}