const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const estatesRoute = require('./routes/estates');
app.use('/estates', estatesRoute);

//DB connection
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true})
.then(() => console.log('Connected to DB'))
.catch(err => console.log(err));

app.listen(3001);