const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//quiz model
const Quiz = require('../../models/Quiz');

// @route	GET api/quiz
// @desc	Get all quiz categories
// @access	Public
router.get('/', (req, res) => {
	Quiz.find().then((categories) => res.json(categories));
});

// @route	POST api/quiz
// @desc	Create new quiz category
// @access	Private
router.post('/', auth, (req, res) => {
	const newQuiz = new Quiz({
		name: req.body.name,
		questions: req.body.questions,
	});

	newQuiz.save().then((newCategory) => res.json(newCategory));
});

// @route	PATCH api/quiz/:id
// @desc	Edit a quiz category/questions
// @access	Private
////// YET TO BE ADDED...//////

// router.patch('/:id', auth, (req, res) => {
// 	console.log(req.params.id);
// 	const editQuiz = Quiz.findById(req.params.id, (err, data) => {
// 		if (err) res.status(404).json(err);
// 		if (data) {
// 			console.log(data);

// 			data.name = req.body;
// 		}
// 	});
// 	editQuiz.save().then((updatedCategory) => res.json(updatedCategory));
// });

// @route	DELETE api/quiz/:id
// @desc	Delete quiz category
// @access	Private
router.delete('/:id', auth, (req, res) => {
	Quiz.findById(req.params.id)
		.then((category) =>
			category.remove().then(() => res.json({ success: true }))
		)
		.catch((err) => res.status(404).json({ error: err }));
});

module.exports = router;
