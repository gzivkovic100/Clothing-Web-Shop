import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCredential, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDR6cJl1eI8oWK3LGXgR-V9ZoVK3S42BOw",
    authDomain: "dumons-clothing-db.firebaseapp.com",
    projectId: "dumons-clothing-db",
    storageBucket: "dumons-clothing-db.appspot.com",
    messagingSenderId: "625619414171",
    appId: "1:625619414171:web:7b2774602c08b69fa8aa3e"
  };


  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);




export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  try {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());

    // if user data dont exist
    // create / set the document with the data from userAuth in my collection
    if(!userSnapShot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date(); 
      try {
        await setDoc(userDocRef, {
          displayName, email, createdAt});
      } catch (error) {
        console.log('Error at creating the user', error.message);
      }
    }

    // if user exist -  return userDocRef
    return userDocRef;
  } catch(err) {
    console.log('Something went wrong',err);
  }
}