import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyANWt_vwbtw1pn0U4QC6r1SxsHL_aHaMmo',
    authDomain: 'motherstouch-6cb27.firebaseapp.com',
    databaseURL: 'https://motherstouch-6cb27-default-rtdb.firebaseio.com/',
    projectId: 'motherstouch-6cb27',
    storageBucket: 'motherstouch-6cb27.appspot.com',
    messagingSenderId: '405200324941',
    appId: '1:405200324941:web:dc6bc26669021a20ce4f04',
    measurementId: 'G-XCRLBN63LV'
  };
  
  // if (!firebase.apps.length) {
  //     firebase.initializeApp(firebaseConfig);
  // }
  const app = firebase.initializeApp(firebaseConfig); 
//   getUserDocument = () => {
//     const db2 = db.getInstance();
//     const users2 = db2.collection("users")
//     const uid = firebase.auth().getInstance().currentUser.uid
//     return users2.document(uid)
// }

   export const db = firebase.firestore();
   export const realtime = app.database(); 
  //export const db = firebase.database();
  export { firebase };
