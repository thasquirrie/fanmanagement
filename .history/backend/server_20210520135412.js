const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DB_LOCAL = process.env.DATABASE_LOCAL;

const connectDB = async () => {
 try {
  await mongoose.connect(DB_LOCAL, {
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false,
   useNewUrlParser: true,
  });
 } catch {}
};
