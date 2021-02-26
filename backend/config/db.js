// // ES5
// const mongoose = require('mongoose');

// ES6 after add type:"module"; in package.json
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true

    })

    console.log(`MongoDB Connected ${conn.connection.host}`.cyan.underline)
  } catch (err) {
    console.error(`Error: ${err.message}`.red.underline.bold)
    // process.exit(0) means program run successfully.
    //  if have an err, we should put number bigger than "0 "
    process.exit(1)
  }
}

// ES5
// module.exports = connectDB

// ES6 after add type:"modules" in package.jason
export default connectDB;