importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');



const firebaseConfig = {
  apiKey: "AIzaSyD9_GM6L5fiOjdELgyGBOue3bcjt8W2m7Q",
  authDomain: "tmsfcm-4d899.firebaseapp.com",
  projectId: "tmsfcm-4d899",
  storageBucket: "tmsfcm-4d899.firebasestorage.app",
  messagingSenderId: "7659912020",
  appId: "1:7659912020:web:5a962ea2dd15cbd191a6c1"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
