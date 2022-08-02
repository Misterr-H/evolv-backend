const User = require('../models/User');
const Meal = require('../models/Meal');

const saveUser = async (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(() => res.sendStatus(201))
        .catch(err => res.status(400).json(err));
}

const getUsers = async (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err));
}

const addMeal = async (req, res) => {
    const name = req.body.name;
    const meals = req.body.meals;
    meals.map(async meal => {
        await Meal.findOne({name: meal.name})
            .then(Item => {
                User.findOneAndUpdate({name: name}, {$push: {mealPlan: {date: req.body.date, meals: Item._id}}}, {new: true}, (err, doc) => {
                    if (err) {
                        console.log(err);
                        res.status(400).json(err);
                    }
                    if(doc) {
                        console.log(doc);
                        res.sendStatus(201);
                    }
                })
            })
    })

}

const updateUserMeal = async (req, res) => {
    const changes = req.body;
    const id = req.params.id;
    User.findOneAndUpdate({_id: id}, changes, {new: true}, (err, doc) => {
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
    saveUser,
    getUsers,
    addMeal,
    updateUserMeal
}