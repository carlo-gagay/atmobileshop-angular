import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  
  dataSource = [
    {
      date: Date.now(),
      content: 'Understanding Angular. To understand the capabilities of the Angular framework, you need to learn about the following:'
    },
    {
      date: Date.now(),
      content: 'Understanding Angular. To understand the capabilities of the Angular framework, you need to learn about the following:'
    },
    {
      date: Date.now(),
      content: 'Understanding Angular. To understand the capabilities of the Angular framework, you need to learn about the following:'
    },
    {
      date: Date.now(),
      content: 'Understanding Angular. To understand the capabilities of the Angular framework, you need to learn about the following:'
    },
    {
      date: Date.now(),
      content: 'Understanding Angular. To understand the capabilities of the Angular framework, you need to learn about the following:'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
