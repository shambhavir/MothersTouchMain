import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyC0WDOmCiReCK3iAVywMdlg3D2aUlX4Mp4',
    authDomain: 'motherstouch-c16c2.firebaseapp.com',
    databaseURL: 'https://motherstouch-c16c2.firebaseio.com',
    projectId: 'motherstouch-c16c2',
    storageBucket: 'motherstouch-c16c2.appspot.com',
    messagingSenderId: '785346079795',
    appId: '1:785346079795:web:72baf49031776cbb334746',
    measurementId: 'G-RJGR80MXXE'
  };
  
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }
  //const app = Firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  
  export { firebase };
