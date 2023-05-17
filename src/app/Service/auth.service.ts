import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl="https://node-be-eta.vercel.app/api/auth/"

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
