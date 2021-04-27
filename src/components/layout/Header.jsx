import { useState } from 'react';
import { Link } from 'react-router-dom';

// Context
import { useAuth } from '../../context/auth/AuthContext';

const Header = () => {
	const { currentUser, logout } = useAuth();
	const [error, setError] = useState('');

	const handleLogout = async e => {
		e.preventDefault();

		setError('');

		try {
			await logout();
		} catch (err) {
			setError('Failed to logout');
		}
	};

	return (
		<>
			<nav className='container-fluid flex items-center justify-between bg-blue-400 px-5 py-2'>
				<h1 className='text-2xl'>
					<Link to='/'>TV Time Like</Link>
				</h1>
				{currentUser && <h2>Welcome {currentUser.email}</h2>}
				<div className='flex items-center space-x-4'>
					{currentUser ? (
						<>
							<Link to='/favorites'>Favorites</Link>
							<button
								onClick={handleLogout}
								className='px-5 py-2 rounded-lg bg-red-400'>
								Logout
							</button>
						</>
					) : (
						<>
							<Link to='/register'>Register</Link>
							<Link to='/login'>Login</Link>
						</>
					)}
				</div>
			</nav>
			{error && <p className='bg-red-400'>{error}</p>}
		</>
	);
};

export default Header;
