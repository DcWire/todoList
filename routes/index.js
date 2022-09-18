const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('Main route');

router.get('/', homeController.home);
router.use('/create-task', require('./create_task'));
router.use('/delete-task', require('./delete_task'));

module.exports = router;