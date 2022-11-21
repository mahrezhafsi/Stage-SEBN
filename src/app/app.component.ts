import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet';
  login! : boolean;


  connecter(){
  const conn:string = localStorage.getItem("login") as string;
  if(conn == "true"){
   return true;
  }else{
    return false;
  }
}
logout(){
  localStorage.removeItem("login");
}

}
