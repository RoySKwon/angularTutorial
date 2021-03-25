import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messageService Property는 HTML에 Binding 되므로 public
  // Angular는 Public 으로 선언된 Component Property만 Binding 된다
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
