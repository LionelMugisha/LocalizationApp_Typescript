import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCUgdFEIIJovM2fm9v8EK5R2v1e-5cKo4g",
    authDomain: "localizationapp-6dec5.firebaseapp.com",
    projectId: "localizationapp-6dec5",
    storageBucket: "localizationapp-6dec5.appspot.com",
    messagingSenderId: "595346668324",
    appId: "1:595346668324:web:549d4d5901b4b1f2ad11b1"
  };

const Firebase = firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();

export default Firebase; 