import axios from 'axios';

import { useReducer } from 'react';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';

const MovieState = props => {
	const initialState = {
		movies: [],
		shows: [],
		favoritesMovies: [],
		favoritesShows: [],
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

	/**
	 * Get popular shows
	 */
	const getShowsPop = async () => {
		try {
			const res = await axios.get(
				`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
			);

			dispatch({ type: 'GET_POPULAR_SHOWS', payload: res.data.results });
		} catch (err) {
			console.error(err.message);
		}
	};

	/**
	 * Add to favorites movies
	 */
	const addMovie = movie => {
		dispatch({ type: 'ADD_MOVIE', payload: movie });
	};

	/**
	 * Remove from favorrites movies
	 */
	const removeMovie = movie => {
		dispatch({ type: 'REMOVE_MOVIE', payload: movie });
	};

	/**
	 * Add to favorites shows
	 */
	const addShow = show => {
		dispatch({ type: 'ADD_SHOW', payload: show });
	};

	/**
	 * Remove from favorites shows
	 */
	const removeShow = show => {
		dispatch({ type: 'REMOVE_SHOW', payload: show });
	};

	return (
		<MovieContext.Provider
			value={{
				movies: state.movies,
				shows: state.shows,
				favoritesMovies: state.favoritesMovies,
				favoritesShows: state.favoritesShows,
				getMoviesPop,
				getShowsPop,
				addMovie,
				removeMovie,
				addShow,
				removeShow,
			}}>
			{props.children}
		</MovieContext.Provider>
	);
};

export default MovieState;
