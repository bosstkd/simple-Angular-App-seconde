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
  cols: any[];

  constructor(private cs:CatalogueService, private router:Router) { }

  ngOnInit() { }

  onSaveProduit(prd){

    this.cs.insertProduit(prd).subscribe(data=>{
      console.log(data["desig"]);
      this.router.navigateByUrl("/produits");
      /*
      if(prd.desig == data["desig"]){
        
      }
      */
    },
      err=> {
        console.log(err) 
      }
      );
  }


}
