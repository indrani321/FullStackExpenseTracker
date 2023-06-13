const express = require('express');
const path = require ('path');
const deleteController = require('../controller/deleteController');
const router= express.Router();


router.delete('/expense/delete-expense/:id',deleteController.deleteUser);
  module.exports=router;