import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { NotificationPayload, getMessaging, getToken, onMessage } from "firebase/messaging";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: "AIzaSyCLDuQGn0HlAP3s2pSm6_HD57LaPfV8zZc",
    authDomain: "fcmangular-e677c.firebaseapp.com",
    projectId: "fcmangular-e677c",
    storageBucket: "fcmangular-e677c.appspot.com",
    messagingSenderId: "162187589413",
    appId: "1:162187589413:web:6bf8c04d048a03e3844ccc",
    measurementId: "G-Y016HYV7X7",
  };
 // VAPID_KEY = "<ADD_PUBLIC_KEY_FROM_FIREBASE_WEB_PUSH_CERTIFICATES>";
 VAPID_KEY="BElrLY218GtVXTFSfejpmdggDtTuhVK3SpAynHdJrqXYGMBkZSgs9jRM9isZ8RTh7WICWQl9hMHkpqq9Bx_to64";
  notifications = new BehaviorSubject<NotificationPayload>({});

  app = initializeApp(this.firebaseConfig);
  messaging = getMessaging(this.app);
  constructor() { 
    this.getFcmToken();
    this.setupMessageHandler();
  }

  async getFcmToken() {
    const fcmToken = await getToken(this.messaging, { vapidKey: this.VAPID_KEY });
    if (fcmToken) {
      console.log(fcmToken);
    }  
  }

  setupMessageHandler() {
    onMessage(this.messaging, (payload) => {
      if (payload.notification) {
        this.notifications.next(payload.notification);
      }
    }); 
  }; 
}
