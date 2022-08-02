const express = require('express');
const router = express.Router();
const {saveFoodItem, getFoodItems} = require('../controllers/foodItemsController');

router.route('/save').post(saveFoodItem);
router.route('/get').get(getFoodItems);

module.exports = router;