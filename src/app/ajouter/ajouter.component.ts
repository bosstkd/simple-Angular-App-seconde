import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {


  prd:any;

  
    status:number;
    message:string;
  
  constructor(private cs:CatalogueService, private router:Router) { }

  ngOnInit() { }

  onSaveProduit(prd){

    if(prd.desig.length < 4 || prd.prix < 1 || prd.qte < 1){
      this.status = 2;
      this.message = "Merci de rensigner tout les champs svp !!";
    }else{
              this.cs.insertProduit(prd).subscribe(data=>{
              console.log(data["desig"]);
            //  this.router.navigateByUrl("/produits");
              this.status = 1;
              this.message = "Produit ajouter avec succés.";
             },
              err=> {
                console.log(err);
                this.status = 3;
                this.message = err;
              }
              );
    }
   
  }


}
