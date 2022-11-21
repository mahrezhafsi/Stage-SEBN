export class Produit {
     public id:number | undefined;
     public Marque:string;
     public Stock:number;
     public Prix:number;
    constructor( marque:string, prix:number, stock:number)
        {
            this.Marque=marque;
            this.Prix=prix;
            this.Stock=stock;
        }
        
}
