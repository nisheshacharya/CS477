const express = require("express");

const router = express.Router();
const categoryController = require('../controllers/categoryController');


router.get('/', categoryController.fetchAll);
module.exports = router;