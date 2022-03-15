import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
