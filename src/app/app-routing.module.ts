import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { EditProduiComponent } from './edit-produi/edit-produi.component';

const routes: Routes = [
  {
    path:"produits", component: ProduitsComponent
  },
  {
    path:"ajouter", component: AjouterComponent
  },
  {
    path:"editer/:id", component: EditProduiComponent
  },
  {
    path:"", redirectTo:"/produits", pathMatch:"full"
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
