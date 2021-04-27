import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useContext } from 'react';
import MovieContext from '../../context/movie/movieContext';

const ShowItem = ({ show, fav }) => {
	const movieContext = useContext(MovieContext);

	const { addShow, removeShow } = movieContext;

	return (
		<div className='flex flex-col bg-white'>
			<h3 className='text-xl text-center'>{show.name}</h3>
			<img
				src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
				alt='poster'
			/>
			<button>
				{fav ? (
					<FavoriteIcon
						style={{ color: 'red' }}
						onClick={() => removeShow(show)}
					/>
				) : (
					<FavoriteBorderIcon
						style={{ color: 'red' }}
						onClick={() => addShow(show)}
					/>
				)}
			</button>
		</div>
	);
};

export default ShowItem;
