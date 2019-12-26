import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
 apiKey: "AIzaSyBOmAZJPCtzEDgSvZQAewCH41sR8zLo74g",
 authDomain: "jy-clothing-db.firebaseapp.com",
 databaseURL: "https://jy-clothing-db.firebaseio.com",
 projectId: "jy-clothing-db",
 storageBucket: "jy-clothing-db.appspot.com",
 messagingSenderId: "756972052774",
 appId: "1:756972052774:web:2baa93a23315f37e86e1e7",
 measurementId: "G-YJVP4TY4M5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
 prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);




export default firebase;