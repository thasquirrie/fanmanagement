const express = require('express');

const app = express();

const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');

app.use(express.json());

app.use('/api/vi/user', userRouter);

app.all('*', (req, res, next) => {
 next(new AppError(`The requested page: ${}`))
});

module.exports = app;
