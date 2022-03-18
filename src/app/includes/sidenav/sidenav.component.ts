import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { LogoService } from 'src/app/services/logo.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  logo?:String;

  // screen = new Observable<number>(observer => {
  //   setInterval(() => observer.next(window.innerWidth), 1000)
  // })

  user = "A.T. Repair Services";

  @Input() isVisible? : boolean;

  linkId: any = 1;

  constructor(private logoService: LogoService) { }

  ngOnInit(): void {
    // this.screen.subscribe(width => {
    //   console.log(width);      
    // })    
    this.logoService.getLogo().subscribe(logo => {
      this.logo = logo;
    });
  }

  toggleAsside(): void {
    this.isVisible = !this.isVisible;
  }

  toggleLinks(id: any): void {
    this.linkId = id;
  }



}
