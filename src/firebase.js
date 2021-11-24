import * as firebase from "firebase";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyDyQZhjZw5V152vYY7oyA3rLUeLvw-wt7U",
  authDomain: "jobseeker-c580f.firebaseapp.com",
  projectId: "jobseeker-c580f",
  storageBucket: "jobseeker-c580f.appspot.com",
  messagingSenderId: "712882871216",
  appId: "1:712882871216:web:4dd1dfff34ea52d737d475",
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();
