import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  toDo(message:string) {
    console.log(message);
  }

  constructor() { }
}
