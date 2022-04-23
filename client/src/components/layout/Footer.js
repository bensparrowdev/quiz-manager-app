import { useState } from 'react';
import { Navbar, Container, Col, Nav, Modal } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Navbar bg="light" className="border-top border-dark mt-auto">
			<Container fluid>
				<Col className="d-flex justify-content-center">
					<Nav>
						<Nav.Link onClick={handleShow}>
							<h6>Quiz Instructions</h6>
						</Nav.Link>
					</Nav>
				</Col>
				<Col className="d-flex justify-content-center">
					<a href="https://fb.com/" target="_blank" rel="noreferrer">
						<FaFacebook
							size={30}
							color="#4267B2"
							className="mx-1"
						/>
					</a>
					<a
						href="https://twitter.com/home"
						target="_blank"
						rel="noreferrer"
					>
						<FaTwitter
							size={30}
							color="#1DA1F2"
							className="mx-1"
							href="https://twitter.com/home"
							targer="_blank"
						/>
					</a>
					<a
						href="https://instagram.com/"
						target="_blank"
						rel="noreferrer"
					>
						<FaInstagram
							size={30}
							color="#C13584"
							className="mx-1"
						/>
					</a>
				</Col>
				<Col>
					<div></div>
				</Col>
			</Container>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Quiz Instructions</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h6 className="mb-2">To begin:</h6>
					<p>
						Select your choice of quiz category from the homepage to
						enter a game.
					</p>
					<p>
						In order to play, you must first register an account.
						Only admin users can create new quiz categories.
					</p>
					<h6 className="mb-2">In game:</h6>
					<p>
						The question number and amount of remaining questions
						left will appear at the top of the section. Select your
						chosen answer by clicking one of the four cards below
						the question.
					</p>
					<p>
						When you're happy with your answer, click the 'Next'
						button to move onto the next question.
					</p>
					<p>
						When you've answered all the questions, proceed to the
						results page to view your final score, along with how
						well you did. Good luck and happy quizzing!
					</p>
				</Modal.Body>
			</Modal>
		</Navbar>
	);
}
