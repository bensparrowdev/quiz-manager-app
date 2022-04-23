import { Card } from 'react-bootstrap';

export default function AnswerCard({ text, selected, setSelected }) {
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

	const changeSelected = () => {
		if (selected === text) {
			return randomiser();
		} else if (selected !== text) {
			return 'bg-primary';
		}
	};

	return (
		<div className="w-50 p-2">
			<Card
				className={`p-3 cursor-pointer border-0 playcard ${changeSelected()}`}
				onClick={() => {
					setSelected(text);
				}}
			>
				<div className="d-flex justify-content-start my-3 text-light shadow-none">
					<h5>{text}</h5>
				</div>
			</Card>
		</div>
	);
}
