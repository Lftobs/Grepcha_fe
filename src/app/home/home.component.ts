import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../Service/web-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;
  constructor(private myItems: WebApiService) {}

  ngOnInit(): void {
      this.getAll()
  }
  getAll(): void {
    this.myItems.getProduct()
    .subscribe(
      data => {
        this.products = data
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }
}
