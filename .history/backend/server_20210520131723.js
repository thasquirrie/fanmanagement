const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DB_LOCAL = process.env.DATABASE_LOCAL;

const connectDB = async () => 
