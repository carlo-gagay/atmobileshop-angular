import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Config } from '../interfaces/config';

@Injectable({
    providedIn: 'root'
})
export class HttpClientConfigService {

    configUrl = "assets/config.json";

    constructor (private httpClient: HttpClient) {}

    getConfig() {
        const conf = this.httpClient.get<Config>(this.configUrl);
        console.log(`This is get config ${conf}`);
        return conf;
    }
}