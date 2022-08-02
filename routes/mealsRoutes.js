const express = require('express');
const router = express.Router();
const {saveMeal, getMeals, updateMeal} = require('../controllers/mealsController');

router.route('/save').post(saveMeal);
router.route('/get').get(getMeals);
router.route('/update/:id').patch(updateMeal);

module.exports = router;