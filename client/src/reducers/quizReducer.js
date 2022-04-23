import {
	DELETE_QUIZ,
	GET_QUIZZES,
	QUIZ_LOADING,
	ADD_QUIZZES,
	EDIT_QUIZ,
} from '../actions/types';

const initialState = {
	loading: false,
	categories: [],
};

export default function quizReducer(state = initialState, action) {
	switch (action.type) {
		case GET_QUIZZES:
			return {
				...state,
				categories: action.payload,
				loading: false,
			};
		case ADD_QUIZZES:
			return {
				...state,
				categories: [action.payload, ...state.categories],
			};
		case EDIT_QUIZ:
			// action.payload = new name
			break;
		// return state.filter((q) => q.id !== action.payload);
		case DELETE_QUIZ:
			return state.filter((q) => q.id !== action.payload);
		case QUIZ_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
}
