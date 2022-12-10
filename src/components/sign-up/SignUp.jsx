import { useState } from 'react';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUp = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	console.log(formFields);
	const onFormFieldChange = e => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div>
			<h1>Create an account</h1>
			<h2>Enter your email and password to sign up.</h2>
			<form onSubmit={() => {}}>
				<label>Display Name:</label>
				<input type='text' required onChange={onFormFieldChange} name='displayName' value={displayName} />

				<label>Email:</label>
				<input type='email' required onChange={onFormFieldChange} name='email' value={email} />

				<label>Password:</label>
				<input type='password' required onChange={onFormFieldChange} name='password' value={password} />

				<label>Confirm Password:</label>
				<input type='password' required onChange={onFormFieldChange} name='confirmPassword' value={confirmPassword} />
				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
};

export default SignUp;
