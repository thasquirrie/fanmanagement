const express = require('express');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

const userRouter = require('./routes/userRoutes');

app.use(express.json());

app.use('/api/vi/user', userRouter);

app.all('*', (req, res, next) => {
 next(
  new AppError(
   `The requested page: ${req.originalUrl} not found on this server`,
   404
  )
 );
});

app.use(globalErrorHandler);

module.exports = app;
