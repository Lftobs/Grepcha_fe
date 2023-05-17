import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../Service/web-api.service';
import { Router } from '@angular/router';
//import { [element] } from '@angular/forms'
//import {[element]} from ''

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product = {
    name: '',
    description: '',
    price: 0
  }
  submitted = false;
  constructor(private productService: WebApiService, private router: Router){}

  ngOnInit(): void {
      
  }

  createProduct(){
    const data = {
      name: this.product.name,
      description: this.product.description,
      price: this.product.price
    };
    
    this.productService.addProduct(data)
      .subscribe(
        {next: response => {
          console.log(response)
          this.submitted = true
	  this.router.navigate(['home'])
          //this.router.navigate(['view/'+ response.id])
        },
        error: (e) => console.log(e)
      }
       
      )
  }

  newProduct(): void{
    this.submitted=false
    this.product ={
      name: '',
      description: '',
      price: 0
    }
  }
 

}
