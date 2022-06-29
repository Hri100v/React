import './App.css';

import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState } from 'react';

firebase.initializeApp({
  apiKey: "AIzaSyApa256PA52QGtokGzVYZKoz54_fVw8YMM",
  authDomain: "superchat-2189e.firebaseapp.com",
  databaseURL: "https://superchat-2189e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "superchat-2189e",
  storageBucket: "superchat-2189e.appspot.com",
  messagingSenderId: "614427664131",
  appId: "1:614427664131:web:f0c0f964a990d1897f9336"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  console.log(1001);
  // console.log(auth.currentUser);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase Chat</h1>
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
  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
  }

  return (
    <>
      <div>
        {messages && messages.map(msg =>
          <ChatMessage key={msg.id}
            message={msg}
            photoURL={auth.currentUser.photoURL}
          />)}
      </div>

      <div>
        <form onSubmit={sendMessage}>

          <input value={formValue} onChange={(e) => { setFormValue(e.target.value) }} />

          <button type='submit'>Send</button>

        </form>
      </div>

      <SignOut />
    </>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  // console.log(photoURL);
  // console.log(props.message);
  // console.log("props:", props);
  // console.log(2002);
  // console.log("auth.currentUser.photoURL:", auth.currentUser.photoURL);

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} width={40} height={40} />
      <p>{text}</p>

    </div>
  );
}

export default App;
