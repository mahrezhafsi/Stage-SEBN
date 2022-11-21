import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="http://localhost:3000/api/produit";
  constructor(public httpclient: HttpClient) 
  { }
  getTousProduits()
  {
    return this.httpclient.get<User[]>(this.apiUrl);
  }
    getProduit(id:number)
    {
     return this.httpclient.get<User>(this.apiUrl+"/"+id);
    }
    supprimerProduit(id:number)
    {
      return this.httpclient.delete<any>(this.apiUrl+"/"+id);
    }

    modifierProduit(p:User)
    {
      return this.httpclient.put(this.apiUrl,p);

    }
      ajoutProduit(p:User)
      {
        return this.httpclient.post<any>(this.apiUrl, p);
      }
}
