import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  logo2: string = "/assets/images/logo2.png";
  logo1: string = "/assets/images/logo1.png";

  screen = new Observable<number>(observer => {
    setInterval(() => observer.next(window.innerWidth), 1000)
  })

  user = "A.T. Repair Services";

  @Input() isVisible? : boolean;

  linkId: any = 1;

  constructor() { }

  ngOnInit(): void {
    this.screen.subscribe(width => {
      console.log(width);
      
    })    
  }

  toggleAsside(): void {
    this.isVisible = !this.isVisible;
  }

  toggleLinks(id: any): void {
    this.linkId = id;
  }



}
