// imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 4000;

// database connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to the database!'));

app.get('/', (req, res) => {
  res.send('Hello world...!');
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
