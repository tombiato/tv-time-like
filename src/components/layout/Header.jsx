import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className='container-fluid flex items-center justify-between bg-blue-400 px-5 py-2'>
			<h1 className='text-2xl'>
				<a href='/'>TV Time Like</a>
			</h1>
			<div className='flex space-x-4'>
				<Link to='/'>Home</Link>
				<Link to='/favorites'>Favorites</Link>
				<Link to='/register'>Register</Link>
				<Link to='/login'>Login</Link>
			</div>
		</nav>
	);
};

export default Header;
