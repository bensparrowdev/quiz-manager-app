import { useState } from 'react';
import { Button, Col, Row, ProgressBar, Modal, Form } from 'react-bootstrap';
import Box from '../../misc/Box';
import AnswerCard from './AnswerCard';
import { useSelector } from 'react-redux';
// import { editQuiz } from '../../../actions/quizActions';
// import { useDispatch } from 'react-redux';

function Questions({
	count,
	selected,
	setSelected,
	name,
	questionsAmount,
	currentQuestion,
	nextBtnAction,
	id,
}) {
	const { token, user } = useSelector((state) => state.auth);
	const [show, setShow] = useState(false);
	const [quizName, setQuizName] = useState('');
	// const dispatch = useDispatch();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		// dispatch(editQuiz(id, quizName));
	};

	return (
		<Box title={name}>
			<div className="px-4">
				<h2 className="mb-4">
					Question {count + 1} of {questionsAmount}
				</h2>
				<h5 className="mb-2">{currentQuestion?.question}</h5>
			</div>
			<Col className="d-flex flex-wrap justify-content-center my-4 mx-5">
				{token
					? currentQuestion?.answers.map((a, i) => {
							return (
								<AnswerCard
									key={i}
									text={a.answer}
									selected={selected}
									setSelected={setSelected}
								/>
							);
					  })
					: null}
			</Col>
			<Col
				className={`d-flex ${
					user?.role === 'admin'
						? 'justify-content-between'
						: 'justify-content-end'
				} mx-5`}
			>
				{user?.role === 'admin' ? (
					<Button variant="primary" onClick={handleShow}>
						Edit Name
					</Button>
				) : null}

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Edit Name</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form
							className="d-flex flex-column align-items-end"
							onSubmit={handleSubmit}
						>
							<Form.Control
								type="text"
								placeholder="enter here..."
								value={quizName}
								onChange={(e) => setQuizName(e.target.value)}
							/>
							<div className="mt-3">
								<Button
									type="submit"
									variant="primary"
									onClick={handleClose}
								>
									Save Changes
								</Button>
							</div>
						</Form>
					</Modal.Body>
				</Modal>

				<Button variant="success" onClick={() => nextBtnAction()}>
					Next
				</Button>
			</Col>
		</Box>
	);
}

function Results({
	name,
	questionsAmount,
	answers,
	correctAnswers,
	setCount,
	setAnswers,
}) {
	let results = 0;
	for (let i = 0; i < answers.length; i++) {
		if (answers[i] === correctAnswers[i]) results++;
	}

	const progress = (results / questionsAmount) * 100;

	const handleRetry = () => {
		setCount(0);
		setAnswers([]);
	};

	return (
		<Box title={name}>
			<Row className="px-4 mb-4">
				<h3 className="mb-4">Results</h3>
				<h5 className="mb-2">
					You answered{' '}
					<span
						style={{
							fontWeight: '500',
						}}
					>
						{results} out of {questionsAmount}
					</span>{' '}
					questions correctly. Click the retry button to play again!
				</h5>
			</Row>
			<Row className="d-flex px-4">
				<h3>Your Score:</h3>
				<h1 className="text-center score">{Math.floor(progress)}</h1>
				<div className="d-flex justify-content-center my-3">
					<ProgressBar
						variant="success"
						now={progress}
						label={`${progress}%`}
						visuallyHidden
						animated
						className="w-50 bar"
					/>
				</div>
			</Row>
			<div className="d-flex justify-content-center my-5">
				<Button variant="primary" onClick={() => handleRetry()}>
					Retry
				</Button>
			</div>
		</Box>
	);
}

export default function PlayQuiz({ currentQuiz }) {
	const [count, setCount] = useState(0);
	const [selected, setSelected] = useState('');
	const [answers, setAnswers] = useState([]);
	const [correctAnswers, setCorrectAnswer] = useState([]);

	const name = currentQuiz.name; //name of quiz
	const questions = currentQuiz.questions; //array of question and its answers
	const currentQuestion = currentQuiz.questions[count];

	const nextBtnAction = () => {
		setAnswers(answers.concat(selected));
		setCount(count + 1);

		currentQuestion.answers.forEach((a) => {
			if (a.correct === true)
				setCorrectAnswer(correctAnswers.concat(a.answer));
		});
	};

	if (questions.length > count) {
		return (
			<Questions
				count={count}
				selected={selected}
				setSelected={setSelected}
				name={name}
				questionsAmount={questions.length}
				currentQuestion={currentQuestion}
				nextBtnAction={nextBtnAction}
				id={currentQuiz._id}
			/>
		);
	} else {
		return (
			<Results
				name={name}
				questionsAmount={questions.length}
				answers={answers}
				correctAnswers={correctAnswers}
				setCount={setCount}
				setAnswers={setAnswers}
			></Results>
		);
	}
}
