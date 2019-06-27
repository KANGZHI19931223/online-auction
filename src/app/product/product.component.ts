import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // 存放商品信息的数组
  private products: Array<Product>;

  // 图片地址
  private imgUrl = 'http://placehold.it/320x150';

  constructor() { }

  // 钩子函数，组件加载完成时会调用一次
  ngOnInit() {

    this.products = [
      new Product(1, '第1个商品', 1.99, 3.5, '第1个商品的描述', ['电子商品', '硬件产品']),
      new Product(2, '第2个商品', 2.99, 2.5, '第2个商品的描述', ['电子商品', '硬件产品']),
      new Product(3, '第3个商品', 3.99, 1.5, '第3个商品的描述', ['硬件产品']),
      new Product(4, '第4个商品', 4.99, 4.5, '第4个商品的描述', ['电子商品', '硬件产品']),
      new Product(5, '第5个商品', 5.99, 1.5, '第5个商品的描述', ['电子商品']),
      new Product(6, '第6个商品', 6.99, 2.5, '第6个商品的描述', ['硬件产品'])
    ];

  }

}

// 声明一个代表商品信息的类
export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string> // 商品类别
  ) {}

}
