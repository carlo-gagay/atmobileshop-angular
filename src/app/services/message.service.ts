import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MessageService {

    messages:string[] = [];

    message?:string;

    constructor () {}

    add(msg:string) : void {
        this.message = msg;
        this.messages.push(msg);
    }

    clear() : void {
        this.message = '';
        this.messages = [];
    }
}