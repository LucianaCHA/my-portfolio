require('dotenv').config();

//requiero express y lo guardo en una cointante para intanciarlo
const express = require('express');
const cors= require('cors');
const path = require('path');

const contactRoute = require('./route/contact.js');
const app = express();

//app va a usar el middleware cors
app.use(express.json());
app.use(cors());

app.use('/', contactRoute);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server running on port ${port}`));