import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function CategoryCard({ category, quiz, setCurrentQuiz }) {
	const navigate = useNavigate();

	const randomiser = () => {
		const num = Math.floor(Math.floor(Math.random() * 10) / 3);

		if (num === 0) {
			return 'bg-success';
		} else if (num === 1) {
			return 'bg-danger';
		} else {
			return 'bg-info';
		}
	};

	return (
		<Card
			className="category-card border-0 btn"
			onClick={() => {
				setCurrentQuiz(quiz);
				navigate('/play');
			}}
		>
			<Card.Body
				className={`card ${randomiser()} m-2 text-light d-flex align-items-center justify-content-center`}
			>
				<h4>{category}</h4>
			</Card.Body>
		</Card>
	);
}
