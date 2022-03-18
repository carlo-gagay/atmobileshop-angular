import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CheckoutComponent } from './checkout/checkout.component';

import { ProductPrice } from '../../interfaces/product-price';
import { ProductPriceService } from '../../services/product-price.service';
 
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'quantity', 'srp', 'actions'];
  productPrices:ProductPrice[] = [];

  dataSource : any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private productPriceService: ProductPriceService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productPriceService.getProductPrices().subscribe(productPrices => {
      this.productPrices = productPrices;
      this.dataSource = new MatTableDataSource<ProductPrice>(this.productPrices)
      this.dataSource.paginator = this.paginator;
    });
  }

  openCheckOut(): void {
    const dialog = this.dialog.open(CheckoutComponent);

    dialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
