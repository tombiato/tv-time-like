import React, { useContext } from 'react';

// Components
import FavoriteShowItem from '../shows/FavoriteShowItem';
import FavoriteMovieItem from '../movies/FavoriteMovieItem';

// Context
import MovieContext from '../../context/movie/movieContext';

const Favorites = () => {
	const movieContext = useContext(MovieContext);
	const { favoritesMovies, favoritesShows } = movieContext;

	return (
		<>
			<div className='container mx-auto bg-blue-400 p-10'>
				<h3 className='text-2xl'>Favorites Movies</h3>
				<div className='grid gap-10 grid-cols-4'>
					{favoritesShows.map(movie => (
						<FavoriteShowItem key={movie.id} fav={true} movie={movie} />
					))}
				</div>
			</div>
			<div className='container mx-auto bg-blue-400 p-10'>
				<h3 className='text-2xl'>Favorites Movies</h3>
				<div className='grid gap-10 grid-cols-4'>
					{favoritesMovies.map(movie => (
						<FavoriteMovieItem key={movie.id} fav={true} movie={movie} />
					))}
				</div>
			</div>
		</>
	);
};

export default Favorites;
