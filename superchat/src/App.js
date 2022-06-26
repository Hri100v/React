import './App.css';

import firebase from 'firebase/compat/app';
// import { initializeApp } from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


// console.log(firebase.auth);
// console.log(firebase.default.auth);
// console.log(firebase);

firebase.initializeApp({
  apiKey: "AIzaSyApa256PA52QGtokGzVYZKoz54_fVw8YMM",
  authDomain: "superchat-2189e.firebaseapp.com",
  databaseURL: "https://superchat-2189e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "superchat-2189e",
  storageBucket: "superchat-2189e.appspot.com",
  messagingSenderId: "614427664131",
  appId: "1:614427664131:web:f0c0f964a990d1897f9336"
});

// initializeApp({
//   apiKey: "AIzaSyApa256PA52QGtokGzVYZKoz54_fVw8YMM",
//   authDomain: "superchat-2189e.firebaseapp.com",
//   databaseURL: "https://superchat-2189e-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "superchat-2189e",
//   storageBucket: "superchat-2189e.appspot.com",
//   messagingSenderId: "614427664131",
//   appId: "1:614427664131:web:f0c0f964a990d1897f9336"
// });

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyApa256PA52QGtokGzVYZKoz54_fVw8YMM",
//   authDomain: "superchat-2189e.firebaseapp.com",
//   databaseURL: "https://superchat-2189e-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "superchat-2189e",
//   storageBucket: "superchat-2189e.appspot.com",
//   messagingSenderId: "614427664131",
//   appId: "1:614427664131:web:f0c0f964a990d1897f9336"
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const firebase = initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);



  return (
    <div className="App">
      <header className="App-header">
        starting..
        
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
}

function SignOut() {
  return auth.currentUser && (

    <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

function ChatRoom() {

}

export default App;
