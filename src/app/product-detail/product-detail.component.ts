import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../model/Product';
import {ProductService} from '../product.service';
import {ProductHttpService} from '../product-http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(private route: ActivatedRoute,
              private pService: ProductHttpService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pService.findOne(+id)
      .subscribe(v => this.product = v);
  }

}
