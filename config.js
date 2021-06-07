import firebase from 'firebase'
 var firebaseConfig = {
    apiKey: "AIzaSyDzR-WmUT2W6ssKcqaILWIljN3fUopxdiI",
    authDomain: "newsletter-dc900.firebaseapp.com",
    databaseURL: "https://newsletter-dc900-default-rtdb.firebaseio.com",
    projectId: "newsletter-dc900",
    storageBucket: "newsletter-dc900.appspot.com",
    messagingSenderId: "437968926372",
    appId: "1:437968926372:web:3e04e82826f2b3b4fdd831"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 export default firebase.database();