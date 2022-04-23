import { Card } from 'react-bootstrap';

const style = {
	maxWidth: '900px',
};

export default function Box({ title, children }) {
	return (
		<div className="d-flex justify-content-center align-items-center my-5">
			<Card className="w-75 shadow border-0" style={style}>
				<Card.Header className="shadow-sm py-4 px-5 bg-primary border-0">
					<h4>{title}</h4>
				</Card.Header>
				<Card.Body className="m-2">{children}</Card.Body>
			</Card>
		</div>
	);
}
