import firebase from "firebase/app";
import "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyA6sQvD2ouPV1lMaFxkI4qKbiVHrBxUbqA",
  authDomain: "music-app-49381.firebaseapp.com",
  databaseURL:
    "https://music-app-49381-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "music-app-49381",
  storageBucket: "music-app-49381.appspot.com",
  messagingSenderId: "374191770439",
  appId: "1:374191770439:web:f1174894e6a79565159a62",
  measurementId: "G-Q3KZPWSK08",
};
export default firebase.initializeApp(firebaseConfig);