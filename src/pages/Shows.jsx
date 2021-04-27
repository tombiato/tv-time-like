import { useContext } from 'react';

// Context
import MovieContext from '../context/movie/movieContext';

// Components
import ShowItem from '../components/shows/ShowItem';

const Shows = () => {
	const movieContext = useContext(MovieContext);

	const { shows, favoritesShows } = movieContext;

	return (
		<div className='container mx-auto bg-blue-400 p-10'>
			<h3 className='text-2xl'>Popular Shows</h3>
			<div className='grid gap-10 grid-cols-8'>
				{shows.map(show => (
					<ShowItem
						key={show.id}
						fav={favoritesShows.includes(show) ? true : false}
						show={show}
					/>
				))}
			</div>
		</div>
	);
};

export default Shows;
