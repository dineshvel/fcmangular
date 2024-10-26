import { Component, OnInit } from '@angular/core';
import { MessagingService } from './messaging.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Firebase Push Notifications</h1>
    <button (click)="requestPermission()">Request Permission</button>
    <div *ngIf="message">
      <h2>Message Received:</h2>
      <pre>{{ message | json }}</pre>
    </div>
  `,
})
export class AppComponent implements OnInit {
  message: any;

  constructor(private messagingService: MessagingService) {}

  ngOnInit() {
    this.messagingService.requestPermission();

    this.messagingService.currentMessage.subscribe((payload:any) => {
      console.log('Message received. ', payload);
      this.message = payload;
    });
  }

  requestPermission() {
    this.messagingService.requestPermission();
  }
}
