import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // 存放商品信息的数组
  private products: Product[];

  // 图片地址
  private imgUrl = 'http://placehold.it/320x150';

  constructor(private product: ProductService) { }

  // 钩子函数，组件加载完成时会调用一次
  ngOnInit() {

    this.products = this.product.getProducts();

  }

}
