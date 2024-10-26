import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  currentMessage: Observable<any>;

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.currentMessage = this.angularFireMessaging.messages;
  }

  requestPermission() {
   /* this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log('FCM Token:', token);
        // Save the token for future use
      },
      (error) => {
        console.error(error);
      }
    );*/
    this.angularFireMessaging.requestToken.subscribe({
      next: (token) => {
        console.log('Permission granted! Save the token to the server!', token);
      },
      error: (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    });
  }
}
