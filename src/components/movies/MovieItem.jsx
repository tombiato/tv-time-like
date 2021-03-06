import { useContext } from 'react';
import MovieContext from '../../context/movie/movieContext';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const MovieItem = ({ movie, fav }) => {
	const movieContext = useContext(MovieContext);
	const { addMovie, removeMovie } = movieContext;

	return (
		<div className='flex flex-col bg-white'>
			<h3 className='text-xl text-center'>{movie.title}</h3>
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt='poster'
			/>
			<button>
				{fav ? (
					<FavoriteIcon
						style={{ color: 'red' }}
						onClick={() => removeMovie(movie)}
					/>
				) : (
					<FavoriteBorderIcon
						style={{ color: 'red' }}
						onClick={() => addMovie(movie)}
					/>
				)}
			</button>
		</div>
	);
};

export default MovieItem;
