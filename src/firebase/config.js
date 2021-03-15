import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyC6YoHJ6Ea_JEQvGKfy3Cqst9gD0I4KCeI',
    authDomain: 'motherstouch--signin.firebaseapp.com',
    databaseURL: 'https://motherstouch--signin-default-rtdb.firebaseio.com/',
    projectId: 'motherstouch--signin',
    storageBucket: 'motherstouch--signin.appspot.com',
    messagingSenderId: '407259421774',
    appId: '1:407259421774:web:f04619e9c1007acb11b71f',
  };
  
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }
  //const app = Firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  
  export { firebase };