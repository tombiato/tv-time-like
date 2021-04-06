import axios from 'axios';

import { useReducer } from 'react';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';

const MovieState = props => {
	const initialState = {
		movies: [],
	};

	const [state, dispatch] = useReducer(movieReducer, initialState);

	/**
	 * Get popular movies
	 */
	const getMoviesPop = async () => {
		try {
			const res = await axios.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
			);

			dispatch({ type: 'GET_POPULAR_MOVIES', payload: res.data.results });
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<MovieContext.Provider
			value={{
				movies: state.movies,
				getMoviesPop,
			}}>
			{props.children}
		</MovieContext.Provider>
	);
};

export default MovieState;
