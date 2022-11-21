import { Injectable } from '@angular/core';
import{HttpClient}from  '@angular/common/http' ;
import { Produit } from './../model/produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
   apiUrl="http://localhost:3000/api/produits";
  constructor(public httpclient: HttpClient) 
  { }
  getTousProduits()
  {
    return this.httpclient.get<Produit[]>(this.apiUrl);
  }
    getProduit(id:number)
    {
     return this.httpclient.get<Produit>(this.apiUrl+"/"+id);
    }
    supprimerProduit(id:number)
    {
      return this.httpclient.delete<any>(this.apiUrl+"/"+id);
    }

    modifierProduit(p:Produit)
    {
      return this.httpclient.put(this.apiUrl,p);

    }
      ajoutProduit(p:Produit)
      {
        return this.httpclient.post<any>(this.apiUrl, p);
      }

  }
