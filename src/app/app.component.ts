import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';
  auth: any;
  
  constructor(){}

  logOut(){ localStorage.setItem('isAuth', 'false')}

  checkAuth(){
    this.auth = localStorage.getItem('isAuth') === 'true'? true : false
    return this.auth
  }
}
