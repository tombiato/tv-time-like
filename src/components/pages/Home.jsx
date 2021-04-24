import Movies from '../movies/Movies';
import Shows from '../shows/Shows';

const Home = () => {
	return (
		<>
			<div className='container mx-auto flex flex-col justify-center text-center h-96'>
				<h2 className='text-3xl'>Welcome to the TV Time Like application</h2>
				<p>Here you can find your favorites movies and shows</p>
			</div>
			<Shows />
			<Movies />
		</>
	);
};

export default Home;
