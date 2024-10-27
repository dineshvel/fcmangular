importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCLDuQGn0HlAP3s2pSm6_HD57LaPfV8zZc',
  authDomain: 'fcmangular-e677c.firebaseapp.com',
  projectId: 'fcmangular-e677c',
  storageBucket: 'fcmangular-e677c.appspot.com',
  messagingSenderId: '162187589413',
  appId: '1:162187589413:web:6bf8c04d048a03e3844ccc',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
