import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../Service/web-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product = {
    name: '',
    description: '',
    price: 0
  }
  updated = false;
  id: string |null = null
  data : any = null
  constructor(
    private productService: WebApiService,
    private route: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.productService.viewProduct(this.id)
      .subscribe({
        next: res => this.data = res,
        error: (e) => console.log(e)
      })
    //console.log(this.data, this.id)
  }

  updateProduct(){
    this.data = {
      name: this.data.name,
      description: this.data.description,
      price: this.data.price
    };
    this.productService.editProduct(this.id, this.data)
      .subscribe(
        { next: response => {
          console.log(response)
          this.updated = true
          this.redirect()
        },
        error: (e) => console.log(e)
      }
     
    )
  }

  redirect() {
    this.router.navigate(['home'])
  }

}
