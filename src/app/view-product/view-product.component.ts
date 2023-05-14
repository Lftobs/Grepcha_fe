import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../Service/web-api.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  id: string | null = null
  data: any
  constructor(
    private productService: WebApiService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id')
      this.detailView()
  }

  detailView(){
    this.productService.viewProduct(this.id)
      .subscribe({
        next: res => {
          this.data = res
          console.log(res)
        },
        error: (e) => console.log(e)
      })
  }

}
