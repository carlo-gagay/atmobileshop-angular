import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = "Header";

  imgUrl = [
    'data:image/jpeg;base64,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',
    'data:image/jpeg;base64,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',
    'data:image/jpeg;base64,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'
  ];

  currentImg:string = "";

  index:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.currentImg = this.imgUrl[0];
  }

  nextImg(): void {
    if (this.index == this.imgUrl.length){
      this.index = 0;
    }
    this.currentImg = this.imgUrl[this.index++];
  }

  prevImg(): void {
    if (this.index == 0) {
      this.index = this.imgUrl.length - 1;
    }
    this.currentImg = this.imgUrl[this.index--];
  }

}