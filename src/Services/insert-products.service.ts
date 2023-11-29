import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/app/Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class InsertProductsService {
  constructor(private httpClient:HttpClient) { }
  BaseUrl: string = '/api/Product/NewProduct';


  insertProduct(product:FormData){
   return this.httpClient.post(`${env.apirooturl}${this.BaseUrl}`,product);
  }
}
