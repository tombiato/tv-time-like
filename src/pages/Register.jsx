import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Context
import { useAuth } from '../context/auth/AuthContext';

const Register = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const history = useHistory();

	const { signup } = useAuth();

	const handleSubmit = async e => {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value)
			return setError('Passwords do not match');

		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			history.push('/');
		} catch (err) {
			setError('Failed to create an account');
		}
		setLoading(false);
	};

	return (
		<form onSubmit={handleSubmit} className='flex flex-col items-center'>
			<h2 className='text-2xl my-10'>Log in</h2>
			{error && <p className='bg-red-400'>{error}</p>}

			<label htmlFor='email'>Your email</label>
			<input
				type='email'
				name='email'
				id='email'
				ref={emailRef}
				className='border-b mb-10'
			/>

			<label htmlFor='password'>Your password</label>
			<input
				type='password'
				name='password'
				id='password'
				ref={passwordRef}
				className='border-b mb-10'
			/>

			<label htmlFor='password2'>Write your password again</label>
			<input
				type='password2'
				name='password2'
				id='password2'
				ref={passwordConfirmRef}
				className='border-b mb-10'
			/>

			{!loading && (
				<input
					type='submit'
					value='Submit'
					className='px-5 py-2 rounded-lg bg-blue-400 text-white text-2xl'
				/>
			)}
		</form>
	);
};

export default Register;
