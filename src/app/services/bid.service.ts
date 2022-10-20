import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IBid, IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  private readonly baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = "https://eauctionservice.azurewebsites.net/api/v1/";
  }

  getProductList() {
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json',);
    return this.http.get(this.baseURL + "seller")
  }

  getProductDetails(productid: number) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json',);
    return this.http.get<IProduct>(this.baseURL + "seller/" + productid)
  }

  getbidDetails(productid: number, pageNumber: number) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json',);
    return this.http.get<IBid[]>(this.baseURL + "seller/" + productid + "/" + pageNumber)
  }

}
