const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
// app initializations
const app = express();
// Middleware use (enable body parser)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app listen port 5000
app.use('/openai', require('./routes/openaiRoutes'));
app.listen(port, () => console.log(`Server started on port ${port}`));
