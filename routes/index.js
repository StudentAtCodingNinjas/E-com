const express = require('express');
const router = express.Router();
const productsController = require("../controller/productsController")

router.use('/products',require('./products'));


module.exports= router;