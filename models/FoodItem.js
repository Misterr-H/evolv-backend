const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
    },
    protein: {
        type: Number,
    },
    carb: {
        type: Number,
    },
    fat: {
        type: Number,
    },
    acceptedUnits: {
        type: [String],
        enum: ['g', 'kg', 'ml', 'l', 'item'],
        required: true
    },
    itemWeight: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('FoodItem', FoodItemSchema);