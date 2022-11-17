import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByF-gXXGuD5Ch05Bpjv7DNvwOvuNhXwBQ",
  authDomain: "benchmark-83c37.firebaseapp.com",
  projectId: "benchmark-83c37",
  storageBucket: "benchmark-83c37.appspot.com",
  messagingSenderId: "34222666707",
  appId: "1:34222666707:web:8a549c9e35d29f85ee3526",
  measurementId: "G-VL86ZX0PE4"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };