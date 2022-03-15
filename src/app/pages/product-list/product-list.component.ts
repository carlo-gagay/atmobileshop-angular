import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CheckoutComponent } from './checkout/checkout.component';

import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'quantity', 'actions'];
  products: Product[] = [];

  dataSource : any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.dataSource = new MatTableDataSource<Product>(this.products)
      this.dataSource.paginator = this.paginator;
    })
  }

  openCheckOut(): void {
    const dialog = this.dialog.open(CheckoutComponent);

    dialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
