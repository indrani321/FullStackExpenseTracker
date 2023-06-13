const express = require('express');
const path = require ('path');
const editController = require('../controller/editController');
const router = express.Router();

router.get('/expense/:id',editController.getUser)
  
router.put('/expense/edit-expense/:id',editController.editUser);
  


module.exports=router;
