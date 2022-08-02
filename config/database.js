const mongoose = require('mongoose');

const connectDB = async () => {
    const MONGODB_URI = process.env.MONGODB_URI;
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
}

module.exports = connectDB;