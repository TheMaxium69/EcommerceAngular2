import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
              private pService: ProductHttpService,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pService.findOne(+id)
      .subscribe(v => this.product = v);
  }

  deleteProduct(): void{


    const result = window.confirm ('voulez vous vraiment supprimer ce produit?');
    if(result === true){

      this.pService.delete(this.product.id).subscribe(v => this.router.navigate(['/products']));
    }
  }

}
