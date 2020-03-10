import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private httpClient:HttpClient) { }

    public host:string="http://localhost:8080";

   findAllProduct(page:number, size:number){
    return this.httpClient.get(this.host+"/produits?page="+page+"&size="+size);
   }

   findAllProductNotPaged(){
    return this.httpClient.get(this.host+"/produits");
   }

   
}
