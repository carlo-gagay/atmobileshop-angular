import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { CartComponent } from 'src/app/pages/cart/cart.component';
import { ProductListComponent } from 'src/app/pages/product-list/product-list.component';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  title = "Repair Services";

  logo1 = "/assets/images/logo1.png";

  isAsideVisible = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  toggleAside() {
    this.isAsideVisible = !this.isAsideVisible;
  }

  openCart(): void {
    const dialogRef = this.dialog.open(CartComponent, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openProductList(): void {
    
    const dialogRef = this.dialog.open(ProductListComponent, {
      width: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

}
