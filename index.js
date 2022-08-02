const app = require('./app');
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/database');
require('dotenv').config();

//Connect to MongoDB
connectDB();



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

