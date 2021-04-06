import { useContext, useEffect } from 'react';
import MovieContext from '../../context/movie/movieContext';
import ShowItem from './ShowItem';

const Shows = () => {
	const movieContext = useContext(MovieContext);

	// eslint-disable-next-line no-unused-vars
	const { movies, getMoviesPop } = movieContext;

	useEffect(() => {
		getMoviesPop();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='container mx-auto bg-blue-400'>
			<h3 className='text-2xl'>Popular Shows</h3>
			<div className='container'>
				{movies.map(movie => (
					<ShowItem movie={movie} />
				))}
			</div>
		</div>
	);
};

export default Shows;
