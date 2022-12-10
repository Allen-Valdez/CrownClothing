import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utilities/firebase/firebase';
import SignUp from '../../components/sign-up/SignUp';

const SignIn = () => {
	const logInGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In</h1>
			<button onClick={logInGoogleUser}>Sign in with Google Popup</button>
			<SignUp />
		</div>
	);
};

export default SignIn;
