const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

//Connect to Mongodb
mongoose
	.connect(process.env.CONNECTION_URI, { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB...'))
	.catch((err) => console.log(err));

// Use routes
app.use('/api/quiz', require('./routes/api/quiz'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}...`));
