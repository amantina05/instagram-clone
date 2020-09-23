import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBucH7Kzm8Ds5CbuUs8uQJlzTPh3eZcTzA',
  authDomain: 'instagram-clone-23884.firebaseapp.com',
  databaseURL: 'https://instagram-clone-23884.firebaseio.com',
  projectId: 'instagram-clone-23884',
  storageBucket: 'instagram-clone-23884.appspot.com',
  messagingSenderId: '671034896143',
  appId: '1:671034896143:web:3aceafdf2319c9f1fc587a',
});

//my config
// const firebaseConfig = {
//   apiKey: "AIzaSyC1fIXz_qFe29u9Nbb615Krpdn9DvqVRSs",
//   authDomain: "instagram-clone-8e3d5.firebaseapp.com",
//   databaseURL: "https://instagram-clone-8e3d5.firebaseio.com",
//   projectId: "instagram-clone-8e3d5",
//   storageBucket: "instagram-clone-8e3d5.appspot.com",
//   messagingSenderId: "38915031745",
//   appId: "1:38915031745:web:9d330be79d54825cfe4a40",
//   measurementId: "G-CS9LRTTFXE"
// };

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
