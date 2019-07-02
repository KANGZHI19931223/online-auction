import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Comment, ProductService } from '../shared/product.service';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.css']
})
export class ProdDetailComponent implements OnInit {

  private productId: number;
  private productDetail: Product;
  private comments: Comment[];

  constructor(private routeInfo: ActivatedRoute, private service: ProductService) { }

  ngOnInit() {

    this.productId = this.routeInfo.snapshot.params['id'] - 0;

    this.productDetail = this.service.getProduct(this.productId);

    this.comments = this.service.getComments(this.productId);

  }

}
