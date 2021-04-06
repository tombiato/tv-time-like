/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
	switch (action.type) {
		case 'GET_POPULAR_MOVIES':
			return {
				...state,
				movies: action.payload,
			};
		default:
			throw new Error(`Unsupported type of: ${action.type}`);
	}
};
