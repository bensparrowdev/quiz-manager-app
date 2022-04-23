import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/styles.min.css';
// import './styles/css/App.min.css';

import Layout from './components/layout/Layout';
import Categories from './components/homepage/Categories';
import CreateQuiz from './components/quiz/create-quiz/CreateQuiz';
import PlayQuiz from './components/quiz/play-quiz/PlayQuiz';
import Login from './components/login/Login';
import Register from './components/login/Register';

import { useDispatch } from 'react-redux';
import { loadUser } from './actions/authActions';

function App() {
	const [currentQuiz, setCurrentQuiz] = useState('');
	const [newQuiz, setNewQuiz] = useState({
		name: '',
		questions: [],
	});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadUser());
		//eslint-disable-next-line
	}, []);

	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route
						path="/"
						element={<Categories setCurrentQuiz={setCurrentQuiz} />}
					/>
					<Route
						path="/create"
						element={
							<CreateQuiz
								newQuiz={newQuiz}
								setNewQuiz={setNewQuiz}
							/>
						}
					/>
					<Route
						path="/play"
						element={<PlayQuiz currentQuiz={currentQuiz} />}
					/>
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route
						path="*"
						element={
							<main className="d-flex justify-content-center align-items-center h-100">
								<p>Oops, there's nothing here!</p>
							</main>
						}
					/>
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
