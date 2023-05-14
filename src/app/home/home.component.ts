import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../Service/web-api.service';
import { of } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;
  detailUrl ='view/'

  constructor(private myItems: WebApiService) {}

  ngOnInit(): void {
      this.getAll()
  }
  getAll(): void {
    this.myItems.getProduct()
    .subscribe(
      {
        next: data => {
          this.products = data
          console.log(data)
        },
        error: (e) => console.log(e),
        complete: () => console.log('complete'),
      }
      
    )
  }
}
