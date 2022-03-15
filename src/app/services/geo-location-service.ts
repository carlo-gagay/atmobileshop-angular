import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
    providedIn: 'root'
})

export class GeoLocationService {

    constructor(private messageService: MessageService) { }

    getCurrentLocation() {
        // Create an Observable that will start listening to geolocation updates
        // when a consumer subscribes.
        const locations = new Observable((observer) => {
            let watchId: number;

            // Simple geolocation API check provides values to publish
            if ('geolocation' in navigator) {
                watchId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
                    observer.next(position);
                    this.messageService.add(`Current Position: ${position}`)
                }, (error: GeolocationPositionError) => {
                    observer.error(error);
                    this.messageService.add(error.message);
                });
            } else {
                observer.error('Geolocation not available');
                this.messageService.add('Geolocation not available');
            }

            // When the consumer unsubscribes, clean up data ready for next subscription.
            return {
                unsubscribe() {
                    navigator.geolocation.clearWatch(watchId);
                }
            };
        });

        // Call subscribe() to start listening for updates.
        const locationsSubscription = locations.subscribe({
            next(position) {
                console.log('Current Position: ', position);
            },
            error(msg) {
                console.log('Error Getting Location: ', msg);
            }
        });

        // Stop listening for location after 10 seconds
        setTimeout(() => {
            locationsSubscription.unsubscribe();
        }, 1000);
    }
}