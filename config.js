import firebase,{initializeApp, firestore} from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAzThHBsdKAzS8fevYgixhYNRSvGZ0j2vk",
  authDomain: "bliblioteca-digital.firebaseapp.com",
  projectId: "bliblioteca-digital",
  storageBucket: "bliblioteca-digital.appspot.com",
  messagingSenderId: "875400211072",
  appId: "1:875400211072:web:a5db99b390a5b64daa5465"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  console.log(err);
}

export default firebase.firestore();