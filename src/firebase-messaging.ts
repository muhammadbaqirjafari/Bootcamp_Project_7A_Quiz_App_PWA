import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/firestore';

export default function firebaseMessaging() {
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
    const db = firebase.firestore();

    // First request permission
    messaging.requestPermission()
    .then(() => {
        console.log("Have Permission");
        return messaging.getToken();
    })
    .then((token: string) => {
        console.log("Token : ", token);

        // Now stroe the generated token to database
        db.collection('messaging-db').doc('token').set({
            Token: token
        });
    })
    .catch((err: any) => {
        console.log("Error Occured While Geting Permission : ", err);
    })
}