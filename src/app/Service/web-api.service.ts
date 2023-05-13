import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  myItems;
  constructor() {
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
    return this.myItems
  }

}
