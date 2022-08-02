const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
  category: {
      type: String,
      enum: ['breakfast', 'lunch', 'dinner', 'snack'],
      required: true
    },
   name: {
        type: String,
        required: true
    },
    foodItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FoodItem',
        }
    ]
})

module.exports = mongoose.model('Meal', MealSchema);