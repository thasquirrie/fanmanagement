const express = require('express');

const app = express();

const userRouter = require('./routes/userRoutes');

app.use('api/vi/user', userRouter);

app.use(express.json());

module.exports = app;
