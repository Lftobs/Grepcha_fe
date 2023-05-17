import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//const baseUrl="https://node-be-eta.vercel.app/api/auth/"
const baseUrl="http://127.0.0.1:8080/api/auth/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(data: any){
    return this.http.post(`${baseUrl}log-in`, data)
  }

  signUp(data: any) {
    return this.http.post(`${baseUrl}sign-up`, data)
  }
}
