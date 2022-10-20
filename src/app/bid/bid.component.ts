import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct, IBid } from '../models/product';
import { BidService } from '../services/bid.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  products: any[] = [];

  productDetails: IProduct;

  bids: IBid[] = [];

  selectedProduct: any;

  pageNumber: number = 0;

  total: number = 0;

  constructor(private bidservice: BidService, private ngxLoader: NgxUiLoaderService) {
    this.productDetails = {
      productName: "",
      shortDescription: "",
      detailedDescription: "",
      startingPrice: 0,
      bidEndDate: "",
      categoryId: 0,
      bidsCount:0
    }

    this.pageNumber = 0;
  }

  ngOnInit(): void {
    this.bidservice.getProductList()
      .subscribe(
        res => {
          Object.assign(this.products, res);
        },
        error => { console.log('Error while gettig product list data.'); });
  }

  getProductInfo() {
    this.ngxLoader.start();
    this.bidservice.getProductDetails(this.selectedProduct)
      .subscribe(
        res => {
          this.productDetails = res;
          this.total=this.productDetails.bidsCount;
          this.getBidDetails();
        }, err => {
          this.ngxLoader.stop();
          console.log('Error while getting product data.');
        }
      );
  }

  getBidDetails() {

    this.bidservice.getbidDetails(this.selectedProduct, this.pageNumber)
      .subscribe(
        res => {
          this.bids = res;
          this.ngxLoader.stop();
        }, err => {
          console.log('Error while getting bid data.');
          this.ngxLoader.stop();
        }
      );
  }

  pageChangeEvent(event: number) {
    this.pageNumber = event;
    this.getBidDetails();
  }
}
