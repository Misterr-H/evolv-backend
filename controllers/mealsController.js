const Meal = require("../models/Meal");
const FoodItem = require("../models/FoodItem");

const saveMeal = async (req, res) => {
    const foodItems = req.body.foodItems;
    const category = req.body.category;
    const name = req.body.name;
    const meal = new Meal({
        category: category,
        name: name,
    });
    meal.foodItems = [];
    await Promise.all(foodItems.map(async foodItem => {
        await FoodItem.findOne({name: foodItem.name})
            .then(Item => {
                meal.foodItems.push(Item._id);
            })

    }))
    meal.save()
        .then(() => res.sendStatus(201))
        .catch(err => res.status(400).json(err));
}

const getMeals = async (req, res) => {
    Meal.find()
        .then(meals => res.json(meals))
        .catch(err => res.status(400).json(err));
}

const updateMeal = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    Meal.findOneAndUpdate({_id: id}, update, {new: true}, (err, doc) => {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        }
        if(doc) {
            console.log(doc);
            res.sendStatus(201);
        }
    })
}

module.exports = {
    saveMeal,
    getMeals,
    updateMeal
}