import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../model/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  p!: Produit;
  constructor(public ps: ProduitService,public ar: ActivatedRoute) {
    let id! :number;
    this.ar.params.subscribe(
      data => {id = data.id;}
    );
    this.ps.getProduit(id).subscribe(
      data => {this.p = data ;}
    );
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   modifier(f : NgForm){
  let marque = f.value['marque'];
  let prix = f.value['prix'];
  let stock = f.value['stock'];
  if (marque !="" && prix >0 && stock >0) {
  this.p.Marque = marque;
        this.p.Prix = prix;
        this.p.Stock=stock;
       
  this.ps.modifierProduit(this.p).subscribe(
    data => {alert("Modife produit avec succes");},
    error => {alert('echec Modification')}
  );
}else{
  alert("error")
}
 

}


}
