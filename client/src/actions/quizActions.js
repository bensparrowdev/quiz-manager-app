import axios from 'axios';
import {
	GET_QUIZZES,
	ADD_QUIZZES,
	DELETE_QUIZ,
	QUIZ_LOADING,
	EDIT_QUIZ,
} from './types';
import { tokenConfig } from './authActions';

export const getQuizzes = () => (dispatch) => {
	dispatch(setQuizLoading());
	axios.get('/api/quiz').then((res) =>
		dispatch({
			type: GET_QUIZZES,
			payload: res.data,
		})
	);

	return {
		type: GET_QUIZZES,
	};
};

export const addQuizzes = (quiz) => (dispatch, getState) => {
	axios.post('/api/quiz', quiz, tokenConfig(getState)).then((res) =>
		dispatch({
			type: ADD_QUIZZES,
			payload: res.data,
		})
	);
};

export const editQuiz = (id, quizName) => (dispatch, getState) => {
	axios
		.patch(`/api/quiz/${id}`, quizName, tokenConfig(getState))
		.then((res) =>
			dispatch({
				type: EDIT_QUIZ,
				payload: res.data, //updated quiz and quiz id
			})
		);
};

export const deleteQuiz = (id) => {
	return {
		type: DELETE_QUIZ,
		payload: id,
	};
};

export const setQuizLoading = () => {
	return {
		type: QUIZ_LOADING,
	};
};
