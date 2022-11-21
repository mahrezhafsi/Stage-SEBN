import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  lesproduits : Produit[] | undefined;
  constructor(public ps:ProduitService) 
  { 
    this.ps.getTousProduits().subscribe(
      data =>{this.lesproduits= data;},
      error =>{alert("Erreur");}

    );
  }
  ngOnInit(): void {
   
  }

  det(p : any):void
  {
    this.ps.getProduit(p).subscribe(
      data =>{
        console.log(data);
        alert(data.Marque+" \n stock"+data.Stock+" \n prix :"+data.Prix);
      },
      error =>{alert("Erreur");}

    );
    
  
  
  
  }

/**
  det1():void
  {alert("nike air max \n pointure 40 \n prix :1600dt");}
  det2():void
  {alert("blousson femme \n taille s\n prix :90dt");}
  det3():void
  {alert("vest homme the north face \n taille xl \n prix :70dt");}
  det4():void
  {alert("veste femme the north face \n taille xl \n prix :50dt");}
  det5():void
  {alert("pontallent homme sport \n taille s \n prix :50dt");}
  det6():void
  {alert("blousson jordon \n taille xl \n prix :100dt");}
  det7():void
  {alert("pull homme fendi \n taille xl \n prix :70dt");}
  det8():void
  {alert("vest homme neuf  \n taille xl \n prix :1500dt");}
  det9():void
  {alert("vest homme neuf \n taille xl\n prix :1500dt");}
  det10():void
  {alert("nike air force \n pointure 42.5 \n prix :200dt");}
det11(){alert("vest homme \n taille m/l \n prix :60dt") }
  det12():void
 {alert("pull homme  \n taille disponible \n prix :50dt ");}
  det13():void
  {alert("capuche homme nike  \n taille xl \n prix :60dt ");}
  det14():void
  {alert("veste homme adidas  \n taille l \n prix :50dt ");}
  det15():void
  {alert("veste homme adidas \n taille disponible \n prix :50dt ");}
*/












connecter(){
  const conn:string = localStorage.getItem("login") as string;
  if(conn == "true"){
   return true;
  }else{
    return false;
  }
}

}
