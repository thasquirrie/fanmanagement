const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

const userRouter = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cors());
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
 morgan('dev');
} else if (process.env.NODE_ENV === 'production') {
 morgan('short');
}

app.use('/api/v1/users', userRouter);

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
