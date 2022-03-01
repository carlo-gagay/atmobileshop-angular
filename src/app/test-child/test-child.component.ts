import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

  @Input() name:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
