const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config.env' });

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

  console.log(`Database connected on: ${conn.connection.host}`);
 } catch (err) {
  console.log(`Error: ${err} ❌❌❌`.red);
 }
};
