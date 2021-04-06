const ShowItem = ({ movie }) => {
	return (
		<div>
			<p>{movie.title}</p>
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt='poster'
			/>
		</div>
	);
};

export default ShowItem;
