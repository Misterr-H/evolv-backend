const express = require('express');
const {urlencoded} = require("express");
const app = express();

app.use(urlencoded({extended: true}));
app.use(express.json());

const foodItems = require('./routes/foodItemsRoutes');
const meals = require('./routes/mealsRoutes');
const users = require('./routes/userRoutes');
const algorithm = require('./routes/algorithmRoutes');

app.use('/api/v1/fooditems', foodItems);
app.use('/api/v1/meals', meals);
app.use('/api/v1/users', users);
app.use('/api/v1/algorithm', algorithm);

module.exports = app;