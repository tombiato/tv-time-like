import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ShowItem = ({ show, fav }) => {
	return (
		<div className='justify-evenly bg-white'>
			<p className='text-center'>{show.name}</p>
			<img
				src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
				alt='poster'
			/>
			<button>
				{fav ? (
					<FavoriteIcon
						style={{ color: 'red' }}
						// onClick={() => addMovie(movie)}
					/>
				) : (
					<FavoriteBorderIcon
						style={{ color: 'red' }}
						// onClick={() => addMovie(movie)}
					/>
				)}
			</button>
		</div>
	);
};

export default ShowItem;
