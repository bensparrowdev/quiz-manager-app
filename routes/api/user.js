const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//quiz model
const User = require('../../models/User');

// @route	POST api/user
// @desc	Register new user
// @access	Public
router.post('/', (req, res) => {
	const { name, email, password } = req.body;

	//validation
	if (!name || !email || !password) {
		return res.status(400).json({ message: 'Please enter all fields' });
	}

	//Check for existing user
	User.findOne({ email }).then((user) => {
		if (user)
			return res.status(400).json({ message: 'User already exists' });

		const newUser = new User({
			name,
			email,
			password,
			role: 'user',
		});

		//Create salt & hash
		bcrypt.genSalt(10, (err, salt) => {
			if (err) throw err;
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if (err) throw err;
				newUser.password = hash;
				newUser.save().then((user) => {
					jwt.sign(
						{ id: user.id },
						process.env.JWT_SECRET,
						{
							expiresIn: 3600,
						},
						(err, token) => {
							if (err) throw err;
							res.json({
								token,
								user: {
									id: user.id,
									name: user.name,
									email: user.email,
									role: user.role,
								},
							});
						}
					);
				});
			});
		});
	});
});

module.exports = router;
