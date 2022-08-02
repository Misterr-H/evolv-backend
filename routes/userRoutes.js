const express = require('express');
const router = express.Router();
const {saveUser, getUsers, addMeal, updateUserMeal} = require('../controllers/userController');

router.route('/save').post(saveUser);
router.route('/get').get(getUsers);
router.route('/addmeal').post(addMeal);
router.route('/update/:id').patch(updateUserMeal);

module.exports = router;