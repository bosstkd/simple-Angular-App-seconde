import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private httpClient:HttpClient) { }

    // public host:string="http://3.15.181.197:8080/EtudeSpringAngular-0.0.1-SNAPSHOT";
    public host:string="http://localhost:8080/";
   findAllProduct(page:number, size:number){
    return this.httpClient.get(this.host+"/produits?page="+page+"&size="+size);
   }

   findAllProductNotPaged(){
    return this.httpClient.get(this.host+"/produits");
   }

   findByDesign(searchWord:string ,page:number, size:number){
    return this.httpClient.get(this.host+"/produits/search/byDesigContains?mc="+searchWord+"&page="+page+"&size="+size);
   }

   deletePrdById(id:string){
     return this.httpClient.delete(this.host+"/prdSupprimer/"+id);
   }
   
   insertProduit(produit){
      return this.httpClient.post(this.host+"/prdInsert", produit);
   }

}
