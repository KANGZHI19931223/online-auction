import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    new Product(1, '第1个商品', 1.99, 3.5, '第1个商品的描述', ['电子商品', '硬件产品']),
    new Product(2, '第2个商品', 2.99, 2.5, '第2个商品的描述', ['电子商品', '硬件产品']),
    new Product(3, '第3个商品', 3.99, 1.5, '第3个商品的描述', ['硬件产品']),
    new Product(4, '第4个商品', 4.99, 4.5, '第4个商品的描述', ['电子商品', '硬件产品']),
    new Product(5, '第5个商品', 5.99, 1.5, '第5个商品的描述', ['电子商品']),
    new Product(6, '第6个商品', 6.99, 2.5, '第6个商品的描述', ['硬件产品'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '张1', '2019-1-1', 3, '评论内容1'),
    new Comment(2, 1, '张2', '2019-1-1', 2, '评论内容2'),
    new Comment(3, 1, '张3', '2019-1-1', 4, '评论内容3'),
    new Comment(4, 2, '张4', '2019-1-1', 3, '评论内容1'),
    new Comment(5, 3, '张5', '2019-1-1', 1, '评论内容1')
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id === id);
  }

  getComments(productId: number) {
    return this.comments.filter((comment) => comment.productId === productId);
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

export class Comment {

  constructor(
    public id: number,
    public productId: number,
    public user: string,
    public timestamp: string,
    public rating: number,
    public content: string
  ) {}

}
