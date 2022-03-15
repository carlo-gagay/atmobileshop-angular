import { Component, OnInit } from '@angular/core';
import { GeoLocationService } from '../services/geo-location-service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = "Test and Test child";

  constructor(private geoLocationSerivce: GeoLocationService) { }

  ngOnInit(): void {
  }

  getCurrentLocation () : void {
    this.geoLocationSerivce.getCurrentLocation();
  }

}
