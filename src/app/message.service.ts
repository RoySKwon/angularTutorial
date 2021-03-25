import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  // String type, initial
  messages: string[] = [];

  addMessage(message: string){
    this.messages.push(message);
    console.log(`POINT: ${message}`);
  }

  clearMessage(){
    this.messages = [];
    console.log(`POINT: ${this.messages}`);
  }  
  constructor() { }
}
