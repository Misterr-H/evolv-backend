const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    calorieRequirement: {
        type: Number,
        required: true
    },
    mealPlan: [
        {
            date: {
                type: String,
            },
            meals: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                }
            ]
        }
    ]
})

module.exports = mongoose.model('User', UserSchema);