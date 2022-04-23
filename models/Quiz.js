const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Answer Schema
const AnswerSchema = new Schema({
	answer: {
		type: String,
		required: true,
	},
	correct: {
		type: Boolean,
	},
});

//create questions Schema
const QuestionsSchema = new Schema({
	question: {
		type: String,
	},
	answers: [AnswerSchema],
});

//create quiz Schema
const QuizSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	questions: [QuestionsSchema],
});

module.exports = Quiz = mongoose.model('quiz', QuizSchema);
