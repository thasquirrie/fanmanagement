const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

const app = require('./app');

dotenv.config({ path: './config.env' });

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
 morgan('dev');
} else if (process.env.NODE_ENV === 'production') {
 morgan('short');
}

const DB_LOCAL = process.env.DATABASE_LOCAL;

const connectDB = async () => {
 try {
  const conn = await mongoose.connect(DB_LOCAL, {
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false,
   useNewUrlParser: true,
  });

  console.log(`Database connected on: ${conn.connection.host}`.yellow.bgBlue);
 } catch (err) {
  console.log(`Error: ${err} ❌❌❌`.red);
 }
};

connectDB();

const port = process.env.NODE_ENV || 8000;
app.listen(port, () => {
 console.log(`App connected on port: ${port}`);
});
