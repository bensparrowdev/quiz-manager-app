import { combineReducers } from 'redux';
//all the reducers to combine
import quizReducer from './quizReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

const allReducers = combineReducers({
	quiz: quizReducer,
	error: errorReducer,
	auth: authReducer,
});

export default allReducers;
