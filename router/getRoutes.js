const express = require('express');
const path = require('path');
const getController = require('../controller/getController');
const router= express.Router();


router.get('/expense',getController.getUser);
module.exports=router;