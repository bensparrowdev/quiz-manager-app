import { useState, useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';

export default function QuestionForm({ name, trigger, newQuiz, setNewQuiz }) {
	const [selected, setSelected] = useState('');
	const [answer1, setAnswer1] = useState({
		answer: '',
		correct: false,
	});
	const [answer2, setAnswer2] = useState({
		answer: '',
		correct: false,
	});
	const [answer3, setAnswer3] = useState({
		answer: '',
		correct: false,
	});
	const [answer4, setAnswer4] = useState({
		answer: '',
		correct: false,
	});

	const answers = [answer1, answer2, answer3, answer4];

	const [questionObj, setQuestionObj] = useState({
		question: '',
		answers: [],
	});

	useEffect(() => {
		if (selected === 'answer1') {
			setAnswer1({
				...answer1,
				correct: true,
			});
			setAnswer2({
				...answer2,
				correct: false,
			});
			setAnswer3({
				...answer3,
				correct: false,
			});
			setAnswer4({
				...answer4,
				correct: false,
			});
		} else if (selected === 'answer2') {
			setAnswer1({
				...answer1,
				correct: false,
			});
			setAnswer2({
				...answer2,
				correct: true,
			});
			setAnswer3({
				...answer3,
				correct: false,
			});
			setAnswer4({
				...answer4,
				correct: false,
			});
		} else if (selected === 'answer3') {
			setAnswer1({
				...answer1,
				correct: false,
			});
			setAnswer2({
				...answer2,
				correct: false,
			});
			setAnswer3({
				...answer3,
				correct: true,
			});
			setAnswer4({
				...answer4,
				correct: false,
			});
		} else if (selected === 'answer4') {
			setAnswer1({
				...answer1,
				correct: false,
			});
			setAnswer2({
				...answer2,
				correct: false,
			});
			setAnswer3({
				...answer3,
				correct: false,
			});
			setAnswer4({
				...answer4,
				correct: true,
			});
		}
		// eslint-disable-next-line
	}, [selected]);

	//Save  onClick, trigger is set to true and triggers newQuiz to push questionObj
	useEffect(() => {
		if (trigger === true) {
			questionObj.answers.push(...answers);
			newQuiz.questions.push(questionObj);
		}
		//eslint-disable-next-line
	}, [trigger]);

	return (
		<Card className="my-4">
			<Card.Body>
				<Form.Group>
					<Form.Label className="h5">Question</Form.Label>
					<Form.Control
						style={{ minHeight: '60px', maxHeight: '150px' }}
						as="textarea"
						placeholder="...?"
						value={questionObj.question}
						onChange={(e) => {
							setQuestionObj({
								...questionObj,
								question: e.target.value,
							});
						}}
						required
					/>
				</Form.Group>
				<Form.Group>
					<div className="d-flex justify-content-between">
						<Form.Label className="h5 mt-2">Answers</Form.Label>
						<Form.Label className="h5 mt-2">Correct</Form.Label>
					</div>
					<div className="d-flex align-items-center my-3 px-3">
						<Form.Check.Label>1.</Form.Check.Label>
						<Form.Control
							type="text"
							placeholder="..."
							className="mx-4"
							required
							value={answer1.answer}
							onChange={(e) =>
								setAnswer1({
									...answer1,
									answer: e.target.value,
								})
							}
						/>
						<Form.Check
							name={name}
							inline
							type="radio"
							required
							value="answer1"
							checked={selected === 'answer1'}
							onChange={(e) => setSelected(e.target.value)}
						/>
					</div>
					<div className="d-flex align-items-center my-3 px-3">
						<Form.Check.Label>2.</Form.Check.Label>
						<Form.Control
							type="text"
							placeholder="..."
							className="mx-4"
							required
							value={answer2.answer}
							onChange={(e) =>
								setAnswer2({
									...answer2,
									answer: e.target.value,
								})
							}
						/>
						<Form.Check
							name={name}
							inline
							type="radio"
							required
							value="answer2"
							checked={selected === 'answer2'}
							onChange={(e) => setSelected(e.target.value)}
						/>
					</div>
					<div className="d-flex align-items-center my-3 px-3">
						<Form.Check.Label>3.</Form.Check.Label>
						<Form.Control
							type="text"
							placeholder="..."
							className="mx-4"
							required
							value={answer3.answer}
							onChange={(e) =>
								setAnswer3({
									...answer3,
									answer: e.target.value,
								})
							}
						/>
						<Form.Check
							name={name}
							inline
							type="radio"
							required
							value="answer3"
							checked={selected === 'answer3'}
							onChange={(e) => setSelected(e.target.value)}
						/>
					</div>
					<div className="d-flex align-items-center my-3 px-3">
						<Form.Check.Label>4.</Form.Check.Label>
						<Form.Control
							type="text"
							placeholder="..."
							className="mx-4"
							required
							value={answer4.answer}
							onChange={(e) =>
								setAnswer4({
									...answer4,
									answer: e.target.value,
								})
							}
						/>
						<Form.Check
							name={name}
							inline
							type="radio"
							required
							value="answer4"
							checked={selected === 'answer4'}
							onChange={(e) => setSelected(e.target.value)}
						/>
					</div>
				</Form.Group>
			</Card.Body>
		</Card>
	);
}
