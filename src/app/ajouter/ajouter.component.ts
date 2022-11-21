import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from '../model/produit';
import { HttpClient } from '@angular/common/http';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls:['./ajouter.component.css'],
  styles: [
  ]
})
export class AjouterComponent implements OnInit {

  constructor(public ps:ProduitService) { }

  ngOnInit(): void {
  }
   ajouter(f:NgForm)
   {
     let marque =f.value['marque'];
     let prix =f.value['prix'];
     let stock =f.value['stock'];

     let p:Produit;
     p=new Produit(marque,prix,stock);

     this.ps.ajoutProduit(p).subscribe
     (
       data =>{alert('ajout produit avec succes');},
       error =>{alert('echec ajout');},
       
     )
   }

}
