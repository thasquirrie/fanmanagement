const express = require('express');

const app = express();

const userRouter = require('./routes/userRoutes');

app.use(express.json());

app.use('/api/vi/user', userRouter);

app.all('*', (req, res, next) => {
 return;
});

module.exports = app;
