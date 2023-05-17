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
  open = false
  
  constructor(
    private productService: WebApiService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id')
      console.log(this.id)
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

  deleteProduct(){
      this.productService.deleteProduct(this.id)
        .subscribe({
        next: res => {
          console.log(res)
          this.redirect()
        },
        error: (e) => console.log(e)
      })
  }

  modal(){
    this.open = true
 }
  
  redirect() {
    this.router.navigate(['home'])
 }

}
