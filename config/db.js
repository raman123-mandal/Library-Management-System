const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/librarymanagementsystem')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
};

module.exports = connectDB;