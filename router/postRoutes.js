const express = require('express');
const path = require ('path');
const postController = require('../controller/postController');
const router= express.Router();



router.post('/expense/add-expense', postController.postUser);

module.exports=router;