import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  private stars: boolean[];

  // 接收 product 组件传递过来的星级评价的数值
  @Input() private rating: number = 0;

  constructor() { }

  ngOnInit() {

    this.stars = [];

    for (let i = 1; i <= 5; i++) {

      this.stars.push(i > this.rating);

    }

  }

}
