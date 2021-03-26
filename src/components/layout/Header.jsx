const Header = () => {
	return (
		<nav className='container-fluid flex items-center justify-between bg-blue-400 px-5 py-2'>
			<h1 className='text-2xl'>
				<a href='/'>TV Time Like</a>
			</h1>
			<div className='flex space-x-4'>
				<a href='/'>Home</a>
				<a href='/favorites'>Favorites</a>
				<a href='/register'>Register</a>
				<a href='/login'>Login</a>
			</div>
		</nav>
	);
};

export default Header;
