import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../Service/web-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items;
  constructor(myItems: WebApiService) {
    this.items = myItems.getProduct()
  }
  
  
  ngOnInit(): void {
      
  }
}
