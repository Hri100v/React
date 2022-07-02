import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
// import { Input } from '@mui/material';

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
    // <button onClick={signInWithGoogle}>Sign in with Google</button>
    <Button variation='outlined' fullWidth={true} onClick={signInWithGoogle}>Sign in with Google</Button>
    // size='large'
  );
}

function SignOut() {
  return auth.currentUser && (
    <Button variant='outlined' fullWidth={true} onClick={() => auth.signOut()}>Sign Out</Button>
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
    <div className='main'>
      <div className='signout'>
        <SignOut />
      </div>
      <div className='message-container'>
        {messages && messages.map((msg, index) => (<ChatMessage
            key={index}
            message={msg}
            photoURL={auth.currentUser.photoURL}
          />))}
      </div>

      <div className='sendmessage-container'>
        <form onSubmit={sendMessage}>
          <div className='sendmessage'>
            <Input style={{
              width: '78%',
              fontSize: '20px',
              fontWeight: '450',
              marginLeft: '5px',
              marginBottom: '-3px'
            }}
              placeholder='Message....' value={formValue} onChange={(e) => { setFormValue(e.target.value) }} />
            {/* <div className='form-button'> */}
              <Button style={{
                width: '18%',
                height: '100%',
                fontSize: '15px',
                fontWeight: '550',
                // margin: '4px 5% -13px 5%',
                maxWidth: '200px'
              }}
                variant='contained' type='submit'>Send</Button>
            {/* </div> */}
          </div>
        </form>
      </div>
    </div>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL, messageKey } = props.message;

  // console.log(photoURL);

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  // console.log(uid, props, 2552);
  
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://freeiconshop.com/wp-content/uploads/edd/image-outline.png'} width={40} height={40} />
      <p>{text}</p>
    </div>
  );
}

export default App;
