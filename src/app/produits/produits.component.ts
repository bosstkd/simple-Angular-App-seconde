import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

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
  motCleRecherche:string;


  constructor(private cs:CatalogueService, private router:Router, private spinner:NgxSpinnerService) { }

  ngOnInit() {
  }

  onGetProducts(){
    this.motCleRecherche = "";
    this.spinner.show();
    this.cs.findAllProduct(this.page, this.size).subscribe(data=>{
      this.pages = new Array<number>(data["page"].totalPages);
      this.prd=data;
      this.spinner.hide();
    },err=>{
        console.log(err);
      })
  }

  jasper(){
    console.log("Jasper Call");

    this.cs.jasper().subscribe(data=>{
      console.log(data);
    }, err=>{
      console.log(err);
    })
  }

  onPageProducts(idx){
    this.page = idx;
    if(this.motCleRecherche.length<1){
      this.onGetProducts();
    }else{
      this.onChercher({searchWord:this.motCleRecherche});
    }
    
  }

  onNextPage(){
    if(this.page+1 < this.pages.length)
      this.page = this.page+1;
    
      if(this.motCleRecherche.length<1){
        this.onGetProducts();
      }else{
        this.onChercher({searchWord:this.motCleRecherche});
      }
  }

  onLastPage(){
    if(this.page >= 1)
      this.page = this.page-1;
    
    if(this.motCleRecherche.length<1){
      this.onGetProducts();
    }else{
      this.onChercher({searchWord:this.motCleRecherche});
    }
  }

  onChercher(data:any){
    this.page = 0;
    this.motCleRecherche = data.searchWord;
    this.cs.findByDesign(data.searchWord,this.page, this.size).subscribe(data=>{
      this.pages = new Array<number>(data["page"].totalPages);
      this.prd=data;
    },err=>{
        console.log(err);
      });
      
  }
   
  deleteProduit(p){
    let conf=confirm("Etes vous sure de vouloir supprimer "+p.desig+" !?");
      if(conf == true){
                this.cs.deletePrdById(p.id).subscribe(data=>{
                                                              if(this.motCleRecherche.length<1){
                                                                this.onGetProducts();
                                                              }else{
                                                                this.onChercher({searchWord:this.motCleRecherche});
                                                              }
                                                            console.log(data);
                                                          },
                                                          err=>{
                                                            console.log(err);
                                                          });
      }
  }

  editerProduit(p){
    this.router.navigateByUrl("/editer/"+btoa(p.id));
  }

}
