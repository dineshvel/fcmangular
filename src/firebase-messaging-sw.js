importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyDD4aaXzDyhxO0f7W0ndp-FyMGRFTGJMDY',
  authDomain: 'my-firebase-notification-25abc.firebaseapp.com',
  projectId: 'my-firebase-notification-25abc',
  storageBucket: 'my-firebase-notification-25abc.appspot.com',
  messagingSenderId: '120007716789',
  appId: '1:120007716789:web:d22766a02ce8f1440633fc',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background Message received: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/download.png', // Use your icon path
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
