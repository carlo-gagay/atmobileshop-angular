import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  logo2:string = "/assets/images/logo2.png";
  logo1:string = "/assets/images/logo1.png";

  user = "A.T. Repair Services";

  isVisible = true;

  semi = "col-md-9";
  full = "col-md-12";

  constructor() { }

  ngOnInit(): void {
  }

  toggleAsside(): void {
    this.isVisible = !this.isVisible;
  }
 
}
