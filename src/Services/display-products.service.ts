import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/app/Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DisplayProductsService {

  constructor(private httpClient:HttpClient) { }
  BaseUrl: string = '/api/Product/GetAllProducts';


  displayProducts(){
   return this.httpClient.get(`${env.apirooturl}${this.BaseUrl}`);
  }
}
