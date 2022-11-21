import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../service/produit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})
export class SupprimerComponent implements OnInit {

  id!: number;
  constructor(public ps: ProduitService,public ar: ActivatedRoute) {
    this.ar.params.subscribe(
      data => {this.id = data.id;}
    );
   }
   annuler(){
     alert('operation de suuprision est annulee');
   }
   valider(){
     this.ps.supprimerProduit(this.id).subscribe(
       data => {alert("supprision avec succes")},
       error => {alert('supprision erroneé')}
     );
     
   }
  ngOnInit(): void {
  }

}
