import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/firestore';

export default function firebaseMessaging() {
    var firebaseConfig = {
        apiKey: "AIzaSyCjEkV75i0-QU6mSXgiCyhdb2jMDxHpjmA",
        authDomain: "bootcamp-2020-96d01.firebaseapp.com",
        databaseURL: "https://bootcamp-2020-96d01.firebaseio.com",
        projectId: "bootcamp-2020-96d01",
        storageBucket: "bootcamp-2020-96d01.appspot.com",
        messagingSenderId: "433774093362",
        appId: "1:433774093362:web:9dacfe586965888023882b",
        measurementId: "G-FV2K1J9YH8"
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