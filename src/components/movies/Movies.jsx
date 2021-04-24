import { useContext, useEffect } from 'react';
import MovieContext from '../../context/movie/movieContext';
import MovieItem from './MovieItem';

const Movies = () => {
	const movieContext = useContext(MovieContext);

	const { movies, favoritesMovies, getMoviesPop } = movieContext;

	useEffect(() => {
		getMoviesPop();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='container mx-auto bg-blue-400 p-10'>
			<h3 className='text-2xl'>Popular Movies</h3>
			<div className='grid gap-10 grid-cols-4'>
				{movies.slice(0, 4).map(movie => (
					<MovieItem
						key={movie.id}
						fav={favoritesMovies.includes(movie) && true}
						movie={movie}
					/>
				))}
			</div>
		</div>
	);
};

export default Movies;
