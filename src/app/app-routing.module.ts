import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { LoginComponent } from './login/login.component';
import { ModifierComponent } from './modifier/modifier.component';
import { ProduitComponent } from './produit/produit.component';
import { SupprimerComponent } from './supprimer/supprimer.component';

const routes: Routes = [
  {path:'ajouter',component: AjouterComponent},
  {path:'supprimer/:id',component: SupprimerComponent},
{path:'modifier/:id',component: ModifierComponent},
{path:'accueil',component: AccueilComponent},
{path:' ',component: AccueilComponent},
{path:'produit',component: ProduitComponent},
{path:'login',component: LoginComponent},
{path:'',component: AccueilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
