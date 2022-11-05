import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA1atWDnTW9WxZlTw9vQAhfFS2V8yD3HTw",
    authDomain: "test-268eb.firebaseapp.com",
    projectId: "test-268eb",
    storageBucket: "test-268eb.appspot.com",
    messagingSenderId: "367925566956",
    appId: "1:367925566956:web:78dfbbc21dd2ef2c6ef4c9",
    measurementId: "G-Y6QZ6JM5G3"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase }; 