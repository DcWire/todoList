const express = require('express');
const router = express.Router();
const del = require('../controllers/delete');

router.get('/', del.delete_task);

module.exports = router;