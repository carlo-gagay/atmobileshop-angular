import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  logo2:string = "/assets/images/logo2.png";
  logo1:string = "/assets/images/logo1.png";

  user = "A.T. Administrator";

  constructor() { }

  ngOnInit(): void {
  }
 
}
