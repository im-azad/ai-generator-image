const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const path = require('path');
// app initializations
const app = express();
// Middleware use (enable body parser)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// set static folder
app.use(express.static(path.join(__dirname, 'public')));

//app listen port 5000
app.use('/openai', require('./server/controllers/routes/openaiRoutes'));
app.listen(port, () => console.log(`Server started on port ${port}`));
