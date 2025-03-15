// imports
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const _PORT = process.env.PORT || 4000;

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// database connection
mongoose
	.connect(process.env.DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connexion a mongodb réussie');
	})
	.catch((err) => {
		console.error('Erreur de connexion à MongoDB réussie: ', err);
	});

//import User models
const UserModel = require('./models/Users');

app.get('/users', async (req, res) => {
	const users = await UserModel.find();
	res.json(users);
});

app.listen(_PORT, () => {
	console.log(`Server started at http://localhost:${_PORT}`);
});
