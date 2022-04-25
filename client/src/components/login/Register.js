import { useEffect, useState } from 'react';
import Box from '../misc/Box';
import { Button, Card, Col, Form, Row, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

export default function Register() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = useSelector((state) => state.auth);
	const error = useSelector((state) => state.error);
	const [errorState, setErrorState] = useState();
	const [newUser, setNewUser] = useState({
		name: '',
		email: '',
		password: '',
		msg: null,
	});

	useEffect(() => {
		if (error.id === 'REGISTER_FAIL') {
			setErrorState({ msg: error.msg.message });
			setTimeout(() => dispatch(clearErrors()), 3000);
		} else {
			setErrorState({ msg: null });
		}
		// eslint-disable-next-line
	}, [error]);

	useEffect(() => {
		if (auth.isAuthenticated) {
			navigate('/');
		}
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		// Attempt to register
		dispatch(register(newUser));
	};

	return (
		<Box title="Register to Get Quizzing">
			<div className="d-flex flex-column align-items-center">
				<Card className="login-card p-4 my-4">
					<h3 className="text-center mb-4">Register Account</h3>
					<Form className="my-2" onSubmit={handleSubmit}>
						<Form.Group className="mb-2">
							<Form.Label className="m-0">Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="John Doe"
								value={newUser.name}
								onChange={(e) =>
									setNewUser({
										...newUser,
										name: e.target.value,
									})
								}
							/>
						</Form.Group>
						<Form.Group className="mb-2">
							<Form.Label className="m-0">Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="name@example.com"
								value={newUser.email}
								onChange={(e) =>
									setNewUser({
										...newUser,
										email: e.target.value,
									})
								}
							/>
						</Form.Group>
						<Form.Group className="mb-2">
							<Form.Label className="m-0">Password</Form.Label>
							<Form.Control
								type="password"
								value={newUser.password}
								onChange={(e) =>
									setNewUser({
										...newUser,
										password: e.target.value,
									})
								}
							/>
						</Form.Group>
						<Row className="mt-4 d-flex">
							<Col className="d-flex justify-content-start">
								<Button
									variant="success"
									className="px-4"
									type="submit"
								>
									Register
								</Button>
							</Col>
							<Col className="d-flex justify-content-end">
								<Link to="/login">
									<Button variant="danger" className="px-4">
										Sign in
									</Button>
								</Link>
							</Col>
						</Row>
					</Form>
					{error?.id ? (
						<Alert variant="danger" className="text-center my-2">
							{errorState.msg}
						</Alert>
					) : null}
				</Card>
				<h5 className="mb-4">Sign in to play!</h5>
			</div>
		</Box>
	);
}
