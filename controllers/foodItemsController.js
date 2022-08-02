const foodItems = require('../models/FoodItem');

const saveFoodItem = async (req, res) => {
    const foodItem = new foodItems(req.body);
    foodItem.save()
        .then(() => res.sendStatus(201))
        .catch(err => res.status(400).json(err));
}

const getFoodItems = async (req, res) => {
    foodItems.find()
        .then(foodItems => res.json(foodItems))
        .catch(err => res.status(400).json(err));
}

module.exports = {
    saveFoodItem,
    getFoodItems
}