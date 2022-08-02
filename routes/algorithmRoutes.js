const express = require('express');
const router = express.Router();
const {selectFoodItem} = require('../controllers/algorithmController');

router.route('/select').post(selectFoodItem);

module.exports = router;