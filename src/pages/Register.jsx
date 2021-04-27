import React, { useRef, useState } from 'react';
import { useAuth } from '../context/auth/AuthContext';

const Register = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const { signup } = useAuth();

	const handleSubmit = async e => {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value)
			return setError('Passwords do not match');

		try {
			setError('');
			setLoading(true);
			signup(emailRef.current.value, passwordRef.current.value);
		} catch (err) {
			setError('Failed to create an account');
		}
		setLoading(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Register</h2>
			{error && <p className='bg-red-400'>{error}</p>}

			<label htmlFor='email'>Email</label>
			<input type='email' name='email' id='email' ref={emailRef} />

			<label htmlFor='password'>password</label>
			<input type='password' name='password' id='password' ref={passwordRef} />

			<label htmlFor='password2'>password</label>
			<input
				type='password2'
				name='password2'
				id='password2'
				ref={passwordConfirmRef}
			/>

			{!loading && <input type='submit' value='Submit' />}
		</form>
	);
};

export default Register;
