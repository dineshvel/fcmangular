import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

 // navigator.serviceWorker.register("firebase-messaging-sw.js", {scope: "firebase-cloud-messaging-push-scope"}).then(function (registration) {


  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
    //  navigator.serviceWorker.register('/firebase-messaging-sw.js')
      navigator.serviceWorker.register('/fcmangular/firebase-messaging-sw.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    });
  } 

  /*if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/assets/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }*/