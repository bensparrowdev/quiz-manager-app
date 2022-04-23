import { Col, Container, Navbar, Button, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/authActions';

import logo from '../../assets/logo.png';

export default function HeaderNavbar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.auth.user);

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<Navbar bg="light" className="p-0">
			<Container fluid>
				<Col className="d-flex justify-content-center">
					<Nav>
						<Link to="/" className="nav-link">
							<h6>Homepage</h6>
						</Link>
						{user?.role === 'admin' ? (
							<Link to="/create">
								<Button variant="info" className="mx-4">
									Create quiz
								</Button>
							</Link>
						) : null}
					</Nav>
				</Col>
				<Col className="d-flex justify-content-center">
					<Navbar.Brand href="/">
						<img
							src={logo}
							className=""
							alt="Website logo"
							width={150}
							height={'auto'}
						/>
					</Navbar.Brand>
				</Col>
				<Col className="d-flex justify-content-center align-items-center">
					{user ? (
						<p className="m-0">
							Hello {capitalizeFirstLetter(user.name)}!
						</p>
					) : null}
					{user ? (
						<Button
							variant="danger"
							className="mx-4"
							onClick={() => {
								dispatch(logout());
								navigate('/login');
							}}
							href="#"
						>
							Log out
						</Button>
					) : (
						<Link to="login">
							<Button variant="danger" className="mx-4">
								Login
							</Button>
						</Link>
					)}
				</Col>
			</Container>
		</Navbar>
	);
}
