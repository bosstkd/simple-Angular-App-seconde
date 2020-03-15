import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-edit-produi',
  templateUrl: './edit-produi.component.html',
  styleUrls: ['./edit-produi.component.css']
})
export class EditProduiComponent implements OnInit {

  constructor(private router:Router, private activateRout:ActivatedRoute, private cs:CatalogueService) { }

  public id:number;
  public desig:string;
  public prix:number;
  public qte:number;

  ngOnInit() {

    let url = atob(this.activateRout.snapshot.params.id);
    console.log(url);
    
    this.cs.findById(url).subscribe(data=>{
      this.id = data["id"];
      this.desig=data["desig"];
      this.prix=data["prix"];
      this.qte=data["qte"];
    });

  }


  status:number;
    message:string;

  onMajProduit(prd) {

    if(prd.desig.length < 4 || prd.prix < 1 || prd.qte < 1){
      this.status = 2;
      this.message = "Merci de rensigner tout les champs svp !!";
    }else{
              this.cs.majProduit(prd, this.id).subscribe(data=>{
              console.log(data["desig"]);
              this.status = 1;
              this.message = "Produit Mis à jour avec succés.";
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
