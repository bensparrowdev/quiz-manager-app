import { useEffect } from 'react';
import Box from '../misc/Box';
import CategoryCard from './CategoryCard';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizzes } from '../../actions/quizActions';

export default function Categories({ setCurrentQuiz }) {
	const quizzes = useSelector((state) => state.quiz.categories); //sets quizzes to quiz state
	const loading = useSelector((state) => state.loading); //sets "loading" to value of state.loading
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getQuizzes());
		// eslint-disable-next-line
	}, []);

	return (
		<Box title="Categories">
			<div className="d-flex flex-wrap justify-content-center">
				{loading ? (
					<h1>loading...</h1>
				) : (
					quizzes?.map((q, index) => {
						return (
							<CategoryCard
								category={q.name}
								key={index}
								quiz={q}
								setCurrentQuiz={setCurrentQuiz}
							/>
						);
					})
				)}
			</div>
		</Box>
	);
}
