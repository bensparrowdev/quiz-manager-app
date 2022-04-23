import { useState } from 'react';
import Box from '../misc/Box';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/authActions';

export default function Login() {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(login(credentials));
		navigate('/');
	};

	return (
		<Box title="Welcome">
			<div className="d-flex flex-column align-items-center">
				<Card className="login-card p-4 my-4">
					<h3 className="text-center mb-4">Login</h3>
					<Form className="my-2" onSubmit={handleSubmit}>
						<Form.Group className="mb-2">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="name@example.com"
								value={credentials.email}
								onChange={(e) =>
									setCredentials({
										...credentials,
										email: e.target.value,
									})
								}
							/>
						</Form.Group>
						<Form.Group className="mb-2">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								value={credentials.password}
								onChange={(e) =>
									setCredentials({
										...credentials,
										password: e.target.value,
									})
								}
							/>
						</Form.Group>
						<Row className="mt-4 d-flex">
							<Col>
								<Button
									variant="success"
									className="px-4"
									type="submit"
								>
									Sign in
								</Button>
							</Col>
							<Col className="d-flex align-items-center">
								<Link to="/register" className="text-dark">
									<p className="m-0">Create Account</p>
								</Link>
							</Col>
						</Row>
					</Form>
				</Card>
				<h5 className="mb-4">Sign in to play!</h5>
			</div>
		</Box>
	);
}
