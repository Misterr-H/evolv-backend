const foodItem = require('../models/FoodItem');

const selectFoodItem = async (req, res) => {
    const calories = req.body.calories;
    const foodItems = await foodItem.find({
        "calories": {$lte: calories},
    });
    foodItems.sort((a, b) => b.calories - a.calories);
    let result = [];
    let totalCalories = 0;
    await Promise.all(foodItems.map(item => {
        let itemCalories = item.calories;
        let quantity = 0;
        if(itemCalories*2 <= calories - totalCalories) {
            while(totalCalories < calories) {
                if(itemCalories == calories) {
                    quantity++;
                    totalCalories += item.calories;
                    break;
                }
                if(totalCalories <= calories) {
                    quantity++;
                    itemCalories += item.calories;
                    totalCalories += item.calories;
                }
                if(quantity == 5) {
                    break;
                }
            }
            if(totalCalories > calories + 100) {
                quantity--;
                totalCalories -= item.calories;
                while(totalCalories < calories - 100) {
                    quantity = quantity + 0.25;
                    totalCalories += item.calories*0.25;
                }
            }
        }
        if(quantity > 0) {
            result.push({
                name: item.name,
                calories: item.calories,
                quantity: quantity
            })
        }

    }))
    res.json(result);
};

module.exports = {
    selectFoodItem
}