import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/app/Environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductsService {
  constructor(private httpClient:HttpClient) { }
  BaseUrl: string = '/api/Product/SoftDelete/';


  deleteProduct(id:number): Observable<any>{
   return this.httpClient.delete(`${env.apirooturl}${this.BaseUrl}${id}`);
  }
  
}
