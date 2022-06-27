importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyADe0Oa8o2P2KPYAUOMJHHcgaFBtdPtjqQ",
    authDomain: "robopulse-4b180.firebaseapp.com",
    projectId: "robopulse-4b180",
    storageBucket: "robopulse-4b180.appspot.com",
    messagingSenderId: "887473812825",
    appId: "1:887473812825:web:e593c42638de9849948848",
    measurementId: "G-7VZHT9G446"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});