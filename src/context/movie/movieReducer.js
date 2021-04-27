/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
	switch (action.type) {
		case 'GET_POPULAR_MOVIES':
			return {
				...state,
				movies: action.payload,
			};
		case 'GET_POPULAR_SHOWS':
			return {
				...state,
				shows: action.payload,
			};
		case 'ADD_MOVIE':
			return {
				...state,
				favoritesMovies: [...state.favoritesMovies, action.payload],
			};
		case 'REMOVE_MOVIE':
			return {
				...state,
				favoritesMovies: [
					...state.favoritesMovies.filter(movie => movie !== action.payload),
				],
			};
		case 'ADD_SHOW':
			return {
				...state,
				favoritesShows: [...state.favoritesShows, action.payload],
			};
		case 'REMOVE_SHOW':
			return {
				...state,
				favoritesShows: [
					...state.favoritesShows.filter(show => show !== action.payload),
				],
			};
		default:
			throw new Error(`Unsupported type of: ${action.type}`);
	}
};
