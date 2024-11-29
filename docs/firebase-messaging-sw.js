importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');



const firebaseConfig = {
  // apiKey: "AIzaSyCLDuQGn0HlAP3s2pSm6_HD57LaPfV8zZc",
  // authDomain:  "fcmangular-e677c.firebaseapp.com",
  // projectId: "fcmangular-e677c",
  // storageBucket: "fcmangular-e677c.appspot.com",
  // messagingSenderId: "162187589413",
  // appId: "1:162187589413:web:6bf8c04d048a03e3844ccc",
  // measurementId: "G-Y016HYV7X7"
  apiKey: "AIzaSyAaHYNWkd626V07PU_jYKUpo70erfUQt-E",
  authDomain: "fcmangular-b4410.firebaseapp.com",
  projectId: "fcmangular-b4410",
  storageBucket: "fcmangular-b4410.firebasestorage.app",
  messagingSenderId: "521739533703",
  appId: "1:521739533703:web:c973fea035d68a02baa722",
  measurementId: "G-9Z1434YYH4"
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