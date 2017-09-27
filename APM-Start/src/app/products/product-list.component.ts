import { ProductService } from './product.service';
import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    // selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {

    constructor(private _productService: ProductService) {
    }

    pageTitle: string = "Product List";
    products: IProduct[];

    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    filteredProducts: IProduct[];
    errorMessage: any;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      this._productService.getProducts().subscribe(
          products => 
          { 
            this.products = products;
            this.filteredProducts = this.products;
          },
          error => {
            this.errorMessage = <any>error;
          }
        );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
}
