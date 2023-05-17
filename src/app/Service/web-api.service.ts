import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

const baseUrl="https://node-be-eta.vercel.app/api/products/"
//const baseUrl="http://127.0.0.1:8080/api/products/"

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get(`${baseUrl}`, { withCredentials: true });
  }

  addProduct(data:any){
    return this.http.post(`${baseUrl}add`, data, { withCredentials: true })
  }

  editProduct(id: any, data: any){
    return this.http.put(`${baseUrl}${id}`, data, { withCredentials: true })
  }

  deleteProduct(id: any){
    return this.http.delete(`${baseUrl}${id}`, { withCredentials: true })
  }

  viewProduct(id: any){
    return this.http.get(`${baseUrl}${id}`, { withCredentials: true })
  }

}
