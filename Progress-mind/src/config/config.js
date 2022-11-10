import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAIJZtL6q3-0QPx5ATDyC1ScijP38m8QRs",
    authDomain: "progress-mind-29681.firebaseapp.com",
    projectId: "progress-mind-29681",
    storageBucket: "progress-mind-29681.appspot.com",
    messagingSenderId: "393239731378",
    appId: "1:393239731378:web:43d9bc9ba337164f847dab",
    measurementId: "G-Y0K8VVZXT3"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }; 