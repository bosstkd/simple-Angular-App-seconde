import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  prd:any;
  size:number =5;
  page:number =0;
  pages:Array<number>;
  constructor(private cs:CatalogueService) { }

  ngOnInit() {
  }

  onGetProducts(){
    this.cs.findAllProduct(this.page, this.size).subscribe(data=>{
      this.pages = new Array<number>(data["page"].totalPages);
      this.prd=data;
    },err=>{
        console.log(err);
      })
  }

  onPageProducts(idx){
    this.page = idx;
    this.onGetProducts();
  }

  onNextPage(){
    if(this.page+1 < this.pages.length)
      this.page = this.page+1;
    
    this.onGetProducts();
  }

  onLastPage(){
    if(this.page >= 1)
      this.page = this.page-1;
    
    this.onGetProducts();
  }
  

}
