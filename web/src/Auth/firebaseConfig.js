import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyByyuJC7YDBiQaEYo9SyKTXUHLkPOX34Z8",
    authDomain: "jan-suvidha.firebaseapp.com",
    projectId: "jan-suvidha",
    storageBucket: "jan-suvidha.appspot.com",
    messagingSenderId: "1021796392522",
    appId: "1:1021796392522:web:38f7b3721dd11e58e350b3"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;