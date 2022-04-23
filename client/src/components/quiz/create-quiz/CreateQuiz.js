import { useState } from 'react';
import Box from '../../misc/Box';
import { Form, Button } from 'react-bootstrap';
import QuestionForm from './QuestionForm';
import { useDispatch } from 'react-redux';
import { addQuizzes } from '../../../actions/quizActions';
import { useNavigate } from 'react-router-dom';

export default function CreateQuiz({ newQuiz, setNewQuiz }) {
	const [count, setCount] = useState(1); //for radios
	const [questionList, setquestionList] = useState([{ name: 'question0' }]); //for radios
	const [trigger, setTrigger] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onAddBtnClick = () => {
		setCount(count + 1);
		setquestionList(questionList.concat({ name: `question${count}` }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setTrigger(true); //triggers useEffect in QuestionForm component
		setTimeout(() => {
			// console.log('quiz added');
			setTrigger(false);
			dispatch(addQuizzes(newQuiz)); //dispatch api call to post new quiz data
		}, 1500);
		setNewQuiz({ ...newQuiz, name: '' }); //resets quiz name in newQuiz state
		setTimeout(() => {
			navigate('/'); //redirect to the category page
		}, 1500);
	};

	return (
		<Box title="Create Quiz">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="d-flex justify-content-center">
					<Form.Label className="h4 my-0">Quiz Name:</Form.Label>
					<Form.Control
						className="w-75 mx-3 border-0 border-bottom"
						type="text"
						placeholder="enter here..."
						value={newQuiz.name}
						onChange={(e) =>
							setNewQuiz({ ...newQuiz, name: e.target.value })
						}
					/>
				</Form.Group>
				{questionList.map((ql, index) => {
					return (
						<QuestionForm
							key={index}
							name={ql.name}
							newQuiz={newQuiz}
							setNewQuiz={setNewQuiz}
							trigger={trigger}
						/>
					);
				})}
				<div className="d-flex justify-content-between">
					<Button variant="primary" onClick={onAddBtnClick}>
						+ add question
					</Button>
					<Button variant="primary" type="submit">
						Save
					</Button>
				</div>
			</Form>
		</Box>
	);
}
