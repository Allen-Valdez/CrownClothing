import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCAvyVTQ5_WUhry7j-wgU2bTHXys8L7hG0',
	authDomain: 'crownclothing-db-1c98d.firebaseapp.com',
	projectId: 'crownclothing-db-1c98d',
	storageBucket: 'crownclothing-db-1c98d.appspot.com',
	messagingSenderId: '277900674825',
	appId: '1:277900674825:web:26435d0a101120055435d8',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async userAuth => {
	const userDocRef = doc(db, 'users', userAuth.uid);
	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot.exists());
};
