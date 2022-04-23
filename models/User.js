const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create user Schema

const UserSchema = new Schema({
	email: {
		type: String,
		requird: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
	},
	register_date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = User = mongoose.model('user', UserSchema);
