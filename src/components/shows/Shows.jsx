import { useContext, useEffect } from 'react';
import MovieContext from '../../context/movie/movieContext';
import ShowItem from './ShowItem';

const Shows = () => {
	const movieContext = useContext(MovieContext);

	const { favoritesShows, shows, getShowsPop } = movieContext;

	useEffect(() => {
		getShowsPop();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='container mx-auto bg-blue-400 p-10'>
			<h3 className='text-2xl'>Popular Shows</h3>
			<div className='grid gap-10 grid-cols-4'>
				{shows.slice(0, 4).map(show => (
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
