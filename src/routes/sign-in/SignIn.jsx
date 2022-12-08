import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utilities/firebase/firebase';

const SignIn = () => {
	const logInGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In</h1>
			<button onClick={logInGoogleUser}>Sign in with Google Popup</button>
		</div>
	);
};

export default SignIn;
