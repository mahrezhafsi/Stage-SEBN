import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  invalid=false;
  lesusers !: User[] ;
  constructor(public ps:UserService,public router : Router) 
  { 
    this.ps.getTousProduits().subscribe(
      data =>{this.lesusers= data;},
      error =>{alert("Erreur");}

    );
  }

  ngOnInit(): void {
   
  }

  modifier(f : NgForm){
    let username = f.value['username'];
    let password=f.value['password'];

   
for (let index = 0; index < this.lesusers.length; index++) {
 
  

 
    if(this.lesusers[index].nomutili == username && this.lesusers[index].motdepasse==password){
     
      localStorage.setItem("login","true");
      alert("vous ete connectez");
      this.router.navigate(["accueil"]);
      
    }

else{
  this.invalid=true;
}  }
}

}
