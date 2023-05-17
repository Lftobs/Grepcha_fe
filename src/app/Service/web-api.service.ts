import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

const baseUrl="https://node-be-eta.vercel.app/api/products/"

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  myItems;
  constructor(private http: HttpClient) {
    this.myItems = [
      {
        name: 'product 1',
        description: 'this is product 1',
        id: 1
      },
      {
        name: 'product 2',
        description: 'this is product 2',
        id: 2
      },
      {
        name: 'product 3',
        description: 'this is product 3',
        id: 3
      },
      {
        name: 'product 4',
        description: 'this is product 4',
        id: 4
      }
    ]
   }

  getProduct() {
    return this.http.get(`${baseUrl}`);
  }

  addProduct(data:any){
    return this.http.post(`${baseUrl}add`, data, { withCredentials: true })
  }

  editProduct(id: any, data: any){
    return this.http.put(`${baseUrl}${id}`, data)
  }

  deleteProduct(id: any){
    return this.http.delete(`${baseUrl}${id}`)
  }

  viewProduct(id: any){
    return this.http.get(`${baseUrl}${id}`)
  }

}
