import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router) { 
    console.log("Product detail route activated for id: ", this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    //training used + js hack to convert to number
    let id = parseInt(this._route.snapshot.paramMap.get("id"));
    this.pageTitle += `: ${id}`;
    this.product = {
      productId: id,
      productName: "stub product",
      productCode: "pc-1",
      releaseDate: "release date",
      price: 1.23,
      description: "test description",
      starRating: 3.3,
      imageUrl: "about:blank"
    }
    
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
