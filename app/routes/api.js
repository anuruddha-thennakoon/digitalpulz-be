const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const presRoute = require('./prescription.route');
const itemRoute = require('./item.route');
const stockRoute=require('./stock.route');
//your routers
router.use('/authenticate', authRoute);
router.use('/users', userRoute);
router.use('/prescription', presRoute);
router.use('/item', itemRoute);
router.use('/stock',stockRoute);
module.exports = router;

