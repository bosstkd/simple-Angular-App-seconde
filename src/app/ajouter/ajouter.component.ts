import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {


  prd:any;
  cols: any[];

  constructor(private cs:CatalogueService) { }

  ngOnInit() {
    this.cs.findAllProductNotPaged().subscribe(data=>{
      this.prd=data;
    },err=>{
        console.log(err);
      })  
    
      this.cols = [
        { field: 'ID', header: 'ID' },
        { field: 'DES', header: 'DES' },
        { field: 'PRIX', header: 'PRIX' },
        { field: 'QTE', header: 'QTE' }
    ];
      
  }
}
