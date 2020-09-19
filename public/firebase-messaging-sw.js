// importScripts('/__/firebase/7.18.0/firebase-app.js');
// importScripts('/__/firebase/7.18.0/firebase-messaging.js');
// importScripts('/__/firebase/init.js');

importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

var firebaseConfig = {
    apiKey: `${secrets.apiKey}`,
    authDomain: `${secrets.authDomain}`,
    databaseURL: `${secrets.databaseURL}`,
    projectId: `${secrets.projectId}`,
    storageBucket: `${secrets.storageBucket}`,
    messagingSenderId: `${secrets.messagingSenderId}`,
    appId: `${secrets.appId}`,
    measurementId: `${secrets.measurementId}`
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();