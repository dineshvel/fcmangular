import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { NotificationPayload } from '@firebase/messaging';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  notifications: NotificationPayload[] = [];
  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
    this.firebase.notifications.subscribe((payload: NotificationPayload) => {
      if(payload.body) this.notifications.push(payload);
    });
  }
}
