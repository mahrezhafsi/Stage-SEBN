import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModifierComponent } from './modifier/modifier.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from '@angular/forms';
import { ProduitComponent } from './produit/produit.component';
import{ HttpClientModule } from  '@angular/common/http';
import { AjouterComponent } from './ajouter/ajouter.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { LoginComponent } from './login/login.component' ;
@NgModule({
  declarations: [
    AppComponent,
    
    ModifierComponent,
    
    AccueilComponent,
    ProduitComponent,
    AjouterComponent,
    SupprimerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
