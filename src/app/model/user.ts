export class User {
    public id:number | undefined;
    public nomutili:string;
    public motdepasse:string;
   constructor( motdepasse:string,nomutili:string)
       {
           this.nomutili=nomutili;
           this.motdepasse=motdepasse;
       }
}
