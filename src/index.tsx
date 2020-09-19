import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebaseMessaging from './firebase-messaging';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Initialize Firebase Messaging
firebaseMessaging();